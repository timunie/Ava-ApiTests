---
title:IStorageFolder Interface
description: Autogenertated API Reference page
hide_table_of_contents: false
---
# IStorageFolder Interface




## Definition
**Namespace:** <a href="N_Avalonia_Platform_Storage">Avalonia.Platform.Storage</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.4

**C#**
``` C#
[NotClientImplementableAttribute]
public interface IStorageFolder : IStorageItem, 
	IDisposable
```
**VB**
``` VB
<NotClientImplementableAttribute>
Public Interface IStorageFolder
	Inherits IStorageItem, IDisposable
```
**F#**
``` F#
[<NotClientImplementableAttribute>]
type IStorageFolder = 
    interface
        interface IStorageItem
        interface IDisposable
    end
```

<table><tr><td><strong>Implements</strong></td><td><a href="T_Avalonia_Platform_Storage_IStorageItem">IStorageItem</a>, <a href="https://learn.microsoft.com/dotnet/api/system.idisposable" target="_blank" rel="noopener noreferrer">IDisposable</a></td></tr>
</table>



## Properties
<table>
<tr>
<td><a href="P_Avalonia_Platform_Storage_IStorageItem_CanBookmark">CanBookmark</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Platform_Storage_IStorageItem">IStorageItem</a>)</td></tr>
<tr>
<td><a href="P_Avalonia_Platform_Storage_IStorageItem_Name">Name</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Platform_Storage_IStorageItem">IStorageItem</a>)</td></tr>
<tr>
<td><a href="P_Avalonia_Platform_Storage_IStorageItem_Path">Path</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Platform_Storage_IStorageItem">IStorageItem</a>)</td></tr>
</table>

## Methods
<table>
<tr>
<td><a href="M_Avalonia_Platform_Storage_IStorageFolder_CreateFileAsync">CreateFileAsync(String)</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Avalonia_Platform_Storage_IStorageFolder_CreateFolderAsync">CreateFolderAsync(String)</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Avalonia_Platform_Storage_IStorageItem_DeleteAsync">DeleteAsync()</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Platform_Storage_IStorageItem">IStorageItem</a>)</td></tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.idisposable.dispose" target="_blank" rel="noopener noreferrer">Dispose()</a></td>
<td>Performs application-defined tasks associated with freeing, releasing, or resetting unmanaged resources.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.idisposable" target="_blank" rel="noopener noreferrer">IDisposable</a>)</td></tr>
<tr>
<td><a href="M_Avalonia_Platform_Storage_IStorageItem_GetBasicPropertiesAsync">GetBasicPropertiesAsync()</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Platform_Storage_IStorageItem">IStorageItem</a>)</td></tr>
<tr>
<td><a href="M_Avalonia_Platform_Storage_IStorageFolder_GetItemsAsync">GetItemsAsync()</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Avalonia_Platform_Storage_IStorageItem_GetParentAsync">GetParentAsync()</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Platform_Storage_IStorageItem">IStorageItem</a>)</td></tr>
<tr>
<td><a href="M_Avalonia_Platform_Storage_IStorageItem_MoveAsync">MoveAsync(IStorageFolder)</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Platform_Storage_IStorageItem">IStorageItem</a>)</td></tr>
<tr>
<td><a href="M_Avalonia_Platform_Storage_IStorageItem_SaveBookmarkAsync">SaveBookmarkAsync()</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Platform_Storage_IStorageItem">IStorageItem</a>)</td></tr>
</table>

## Extension Methods
<table>
<tr>
<td><a href="M_Avalonia_Platform_Storage_StorageProviderExtensions_TryGetLocalPath">TryGetLocalPath()</a></td>
<td><br />(Defined by <a href="T_Avalonia_Platform_Storage_StorageProviderExtensions">StorageProviderExtensions</a>)</td></tr>
</table>

## See Also


#### Reference
<a href="N_Avalonia_Platform_Storage">Avalonia.Platform.Storage Namespace</a>  
