(* Copyright (C) 2017 Authors of BuckleScript
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Lesser General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * In addition to the permissions granted to you by the LGPL, you may combine
 * or link a "work that uses the Library" with a publicly distributed version
 * of this file to produce a combined library or application, then distribute
 * that combined work under the terms of your choosing, with no requirement
 * to comply with the obligations normally placed on you by section 4 of the
 * LGPL version 3 (or the corresponding section of a later version of the LGPL
 * should you choose to use a later version).
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public License
 * along with this program; if not, write to the Free Software
 * Foundation, Inc., 59 Temple Place - Suite 330, Boston, MA 02111-1307, USA. *)


let packages_info  = 
  ref (Empty : Js_packages_info.t )

let get_package_name () =
  match !packages_info with
  | Empty  -> None
  | NonBrowser(n,_) -> Some n

let set_package_name name =
  match !packages_info with
  | Empty -> packages_info := NonBrowser(name,  [])
  |  _ ->
    Ext_pervasives.bad_argf "duplicated flag for -bs-package-name"

let set_package_map name = 
    set_package_name name ; 
    Clflags.open_modules := 
      Ext_namespace.namespace_of_package_name name ::
      !Clflags.open_modules
      
let update_npm_package_path s  = 
  packages_info := Js_packages_info.add_npm_package_path s !packages_info

let get_packages_info () = !packages_info  