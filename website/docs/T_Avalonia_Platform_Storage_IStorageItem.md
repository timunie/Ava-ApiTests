# IStorageItem Interface


Manipulates storage items (files and folders) and their contents, and provides information about them



## Definition
**Namespace:** <a href="N_Avalonia_Platform_Storage">Avalonia.Platform.Storage</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
[NotClientImplementableAttribute]
public interface IStorageItem : IDisposable
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
<NotClientImplementableAttribute>
Public Interface IStorageItem
	Inherits IDisposable
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
[<NotClientImplementableAttribute>]
type IStorageItem = 
    interface
        interface IDisposable
    end
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Platform/Storage/IStorageItem.cs" title="View the source code">View Source</a>

<table>
<tr><td><strong>Implements</strong></td><td><a href="https://learn.microsoft.com/dotnet/api/system.idisposable" target="_blank" rel="noopener noreferrer">IDisposable</a></td></tr>
</table>

This interface inherits <a href="https://learn.microsoft.com/dotnet/api/system.idisposable" target="_blank" rel="noopener noreferrer">IDisposable</a> . It's recommended to dispose IStorageItem when it's not used anymore.

## Properties
<table>
<tr>
<td><a href="P_Avalonia_Platform_Storage_IStorageItem_CanBookmark">CanBookmark</a></td>
<td>Returns true is item can be bookmarked and reused later.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Platform_Storage_IStorageItem_Name">Name</a></td>
<td>Gets the name of the item including the file name extension if there is one.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Platform_Storage_IStorageItem_Path">Path</a></td>
<td>Gets the file-system path of the item.</td>
</tr>
</table>

## Methods
<table>
<tr>
<td><a href="M_Avalonia_Platform_Storage_IStorageItem_DeleteAsync">DeleteAsync()</a></td>
<td>Deletes the current storage item and it's contents</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.idisposable.dispose" target="_blank" rel="noopener noreferrer">Dispose()</a></td>
<td>Performs application-defined tasks associated with freeing, releasing, or resetting unmanaged resources.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.idisposable" target="_blank" rel="noopener noreferrer">IDisposable</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Platform_Storage_IStorageItem_GetBasicPropertiesAsync">GetBasicPropertiesAsync()</a></td>
<td>Gets the basic properties of the current item.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Platform_Storage_IStorageItem_GetParentAsync">GetParentAsync()</a></td>
<td>Gets the parent folder of the current storage item.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Platform_Storage_IStorageItem_MoveAsync">MoveAsync(IStorageFolder)</a></td>
<td>Moves the current storage item and it's contents to a <a href="T_Avalonia_Platform_Storage_IStorageFolder">IStorageFolder</a></td>
</tr>
<tr>
<td><a href="M_Avalonia_Platform_Storage_IStorageItem_SaveBookmarkAsync">SaveBookmarkAsync()</a></td>
<td>Saves items to a bookmark.</td>
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

