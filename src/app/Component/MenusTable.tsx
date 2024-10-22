import React from 'react'
import { IItem } from '@/app/models/Item';
import { FaUtensils } from 'react-icons/fa';

const MenusTable = ({menus}: {menus: IItem[]}) => {
  return (
    <div className="overflow-x-auto">
          <table className="w-full border-collapse bg-surface-variant rounded-lg overflow-hidden shadow-md">
            <thead className="bg-gray-200 text-onSurface">
              <tr>
                <th className="p-3 text-left">
                  <input type="checkbox" className="form-checkbox h-5 w-5 text-primary" />
                </th>
                <th className="p-3 text-left">ID</th>
                <th className="p-3 text-left">Menu</th>
                <th className="p-3 text-left">Price</th>
                <th className="p-3 text-left">Category</th>
                <th className="p-3 text-left">Action</th>
              </tr>
            </thead>
            <tbody>
              {menus.map((menu: IItem,index:number) => (
                <tr key={menu.id} className="border-b border-gray-200 hover:bg-gray-100">
                  <td className="p-3">
                    <input type="checkbox" className="form-checkbox h-5 w-5 text-primary" />
                  </td>
                  <td className="p-3">{`M000${1+index}`}</td>
                  <td className="p-3">
                    <div className="flex items-center space-x-3">
                      <div className="flex-shrink-0 w-10 h-10 relative flex items-center justify-center bg-gray-200 rounded-full">
                        <FaUtensils className="text-gray-600 text-xl" />
                      </div>
                      <div className="font-medium">{menu.name}</div>
                    </div>
                  </td>
                  <td className="p-3">
                    {menu.fullPrice ? `\u20b9${menu.fullPrice}` : ''}
                    {menu.halfPrice ? ` / \u20b9${menu.halfPrice} (half)` : ''}
                  </td>
                  <td className="p-3">{menu.category}</td>
                  <td className="p-3">
                    <button className="text-primary hover:text-primary-dark mr-2">Edit</button>
                    <button className="text-error hover:text-error-dark">Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
  )
}

export default MenusTable
