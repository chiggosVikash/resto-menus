import { IItem } from '@/app/models/Item';
import { openDB } from 'idb';


/**
 * Initializes the IndexedDB database for storing orders.
 * 
 * @returns {Promise} A promise that resolves to the database instance.
 */
const dbPromise = typeof window !== 'undefined' ? openDB('bucketDB', 1, {
    /**
     * Upgrades the database schema if necessary.
     * 
     * @param {IDBUpgradeDB} upgradeDB - The database upgrade request.
     */
    upgrade(upgradeDB) {
        if (!upgradeDB.objectStoreNames.contains('buckets')) {
            upgradeDB.createObjectStore('buckets', { keyPath: 'id', autoIncrement: true });
        }
    }
}) : Promise.resolve(null); // Return a resolved promise if not in the browser

/**
 * Adds a new order to the database.
 * 
 * @param {Bucket} order - The order to be added.
 * @returns {Promise} A promise that resolves when the order is added.
 */
export async function addToBucket(order: IItem): Promise<void> {
    const db = await dbPromise;
    if (db) { // Check if db is defined
        const tx = db.transaction('buckets', 'readwrite');
        const store = tx.objectStore('buckets');
        await store.add(order);
        await tx.done;
    }
}

/**
 * Retrieves all orders from the database.
 * 
 * @returns {Promise<Bucket[]>} A promise that resolves to an array of all orders.
 */
export async function getBucketItems(): Promise<IItem[]> {
    const db = await dbPromise;
    if (db) { // Check if db is defined
        const tx = db.transaction('buckets', 'readonly');
        const store = tx.objectStore('buckets');
        return await store.getAll();
    }
    return []; // Return an empty array if db is not defined
}

export async function deleteBucketItems(itemId: string): Promise<number> {
    const db = await dbPromise;
    if (db) {
        console.log("itemId", itemId);
        const tx = db.transaction('buckets', 'readwrite');
        const store = tx.objectStore('buckets');
        const cursorRequest = store.openCursor();
        let itemDeleted = false; // Flag to track if an item was deleted

        cursorRequest.then((cursor) => {
            if (cursor) {
                console.log("item Id", cursor?.value.id);
                // Check if the current record's id matches the itemId
                if (cursor.value.itemId === itemId) {
                    console.log("Deleting item with id:", cursor.value.id);
                    cursor.delete(); // Delete the current record
                    itemDeleted = true; // Set the flag to true
                }
                cursor.continue(); // Move to the next record
            } else {
                console.log("No more entries to process.");
            }
        }).catch((error) => {
            console.error("Cursor error:", error);
        });
        await tx.done;

        if (itemDeleted) {
            return 200; // Success: Item deleted
        } else {
            return 404; // Not Found: Item does not exist
        }
    }
    return 500; // Internal Server Error: Database not defined
}
