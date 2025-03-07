# IStorageBookmarkFolder Interface




## Definition
**Namespace:** <a href="N_Avalonia_Platform_Storage">Avalonia.Platform.Storage</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public interface IStorageBookmarkFolder : IStorageFolder, 
	IStorageItem, IDisposable, IStorageBookmarkItem
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Interface IStorageBookmarkFolder
	Inherits IStorageFolder, IStorageItem, IDisposable, IStorageBookmarkItem
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
type IStorageBookmarkFolder = 
    interface
        interface IStorageFolder
        interface IStorageItem
        interface IDisposable
        interface IStorageBookmarkItem
    end
```
</TabItem>
</Tabs>

<table>
<tr><td><strong>Implements</strong></td><td><a href="T_Avalonia_Platform_Storage_IStorageBookmarkItem">IStorageBookmarkItem</a>, <a href="T_Avalonia_Platform_Storage_IStorageFolder">IStorageFolder</a>, <a href="T_Avalonia_Platform_Storage_IStorageItem">IStorageItem</a>, <a href="https://learn.microsoft.com/dotnet/api/system.idisposable" target="_blank" rel="noopener noreferrer">IDisposable</a></td></tr>
</table>



## Properties
<table>
<tr>
<td><a href="P_Avalonia_Platform_Storage_IStorageItem_CanBookmark">CanBookmark</a></td>
<td>Returns true is item can be bookmarked and reused later.<br />(Inherited from <a href="T_Avalonia_Platform_Storage_IStorageItem">IStorageItem</a>)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Platform_Storage_IStorageItem_Name">Name</a></td>
<td>Gets the name of the item including the file name extension if there is one.<br />(Inherited from <a href="T_Avalonia_Platform_Storage_IStorageItem">IStorageItem</a>)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Platform_Storage_IStorageItem_Path">Path</a></td>
<td>Gets the file-system path of the item.<br />(Inherited from <a href="T_Avalonia_Platform_Storage_IStorageItem">IStorageItem</a>)</td>
</tr>
</table>

## Methods
<table>
<tr>
<td><a href="M_Avalonia_Platform_Storage_IStorageFolder_CreateFileAsync">CreateFileAsync(String)</a></td>
<td>Creates a file with specified name as a child of the current storage folder<br />(Inherited from <a href="T_Avalonia_Platform_Storage_IStorageFolder">IStorageFolder</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Platform_Storage_IStorageFolder_CreateFolderAsync">CreateFolderAsync(String)</a></td>
<td>Creates a folder with specified name as a child of the current storage folder<br />(Inherited from <a href="T_Avalonia_Platform_Storage_IStorageFolder">IStorageFolder</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Platform_Storage_IStorageItem_DeleteAsync">DeleteAsync()</a></td>
<td>Deletes the current storage item and it's contents<br />(Inherited from <a href="T_Avalonia_Platform_Storage_IStorageItem">IStorageItem</a>)</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.idisposable.dispose" target="_blank" rel="noopener noreferrer">Dispose()</a></td>
<td>Performs application-defined tasks associated with freeing, releasing, or resetting unmanaged resources.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.idisposable" target="_blank" rel="noopener noreferrer">IDisposable</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Platform_Storage_IStorageItem_GetBasicPropertiesAsync">GetBasicPropertiesAsync()</a></td>
<td>Gets the basic properties of the current item.<br />(Inherited from <a href="T_Avalonia_Platform_Storage_IStorageItem">IStorageItem</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Platform_Storage_IStorageFolder_GetItemsAsync">GetItemsAsync()</a></td>
<td>Gets the files and subfolders in the current folder.<br />(Inherited from <a href="T_Avalonia_Platform_Storage_IStorageFolder">IStorageFolder</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Platform_Storage_IStorageItem_GetParentAsync">GetParentAsync()</a></td>
<td>Gets the parent folder of the current storage item.<br />(Inherited from <a href="T_Avalonia_Platform_Storage_IStorageItem">IStorageItem</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Platform_Storage_IStorageItem_MoveAsync">MoveAsync(IStorageFolder)</a></td>
<td>Moves the current storage item and it's contents to a <a href="T_Avalonia_Platform_Storage_IStorageFolder">IStorageFolder</a><br />(Inherited from <a href="T_Avalonia_Platform_Storage_IStorageItem">IStorageItem</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Platform_Storage_IStorageBookmarkItem_ReleaseBookmarkAsync">ReleaseBookmarkAsync()</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Platform_Storage_IStorageBookmarkItem">IStorageBookmarkItem</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Platform_Storage_IStorageItem_SaveBookmarkAsync">SaveBookmarkAsync()</a></td>
<td>Saves items to a bookmark.<br />(Inherited from <a href="T_Avalonia_Platform_Storage_IStorageItem">IStorageItem</a>)</td>
</tr>
</table>

## Extension Methods
<table>
<tr>
<td><a href="M_Avalonia_Platform_Storage_StorageProviderExtensions_TryGetLocalPath">TryGetLocalPath()</a></td>
<td>Gets the local file system path of the item as a string.<br />(Defined by <a href="T_Avalonia_Platform_Storage_StorageProviderExtensions">StorageProviderExtensions</a>)</td>
</tr>
</table>

## See Also


#### Reference
<a href="N_Avalonia_Platform_Storage">Avalonia.Platform.Storage Namespace</a>  
