---
title:IStorageProvider Interface
description: Autogenertated API Reference page
hide_table_of_contents: false
---
# IStorageProvider Interface




## Definition
**Namespace:** <a href="N_Avalonia_Platform_Storage">Avalonia.Platform.Storage</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.4

**C#**
``` C#
[NotClientImplementableAttribute]
public interface IStorageProvider
```
**VB**
``` VB
<NotClientImplementableAttribute>
Public Interface IStorageProvider
```
**F#**
``` F#
[<NotClientImplementableAttribute>]
type IStorageProvider = interface end
```



## Properties
<table>
<tr>
<td><a href="P_Avalonia_Platform_Storage_IStorageProvider_CanOpen">CanOpen</a></td>
<td> </td></tr>
<tr>
<td><a href="P_Avalonia_Platform_Storage_IStorageProvider_CanPickFolder">CanPickFolder</a></td>
<td> </td></tr>
<tr>
<td><a href="P_Avalonia_Platform_Storage_IStorageProvider_CanSave">CanSave</a></td>
<td> </td></tr>
</table>

## Methods
<table>
<tr>
<td><a href="M_Avalonia_Platform_Storage_IStorageProvider_OpenFileBookmarkAsync">OpenFileBookmarkAsync(String)</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Avalonia_Platform_Storage_IStorageProvider_OpenFilePickerAsync">OpenFilePickerAsync(FilePickerOpenOptions)</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Avalonia_Platform_Storage_IStorageProvider_OpenFolderBookmarkAsync">OpenFolderBookmarkAsync(String)</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Avalonia_Platform_Storage_IStorageProvider_OpenFolderPickerAsync">OpenFolderPickerAsync(FolderPickerOpenOptions)</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Avalonia_Platform_Storage_IStorageProvider_SaveFilePickerAsync">SaveFilePickerAsync(FilePickerSaveOptions)</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Avalonia_Platform_Storage_IStorageProvider_TryGetFileFromPathAsync">TryGetFileFromPathAsync(Uri)</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Avalonia_Platform_Storage_IStorageProvider_TryGetFolderFromPathAsync">TryGetFolderFromPathAsync(Uri)</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Avalonia_Platform_Storage_IStorageProvider_TryGetWellKnownFolderAsync">TryGetWellKnownFolderAsync(WellKnownFolder)</a></td>
<td> </td></tr>
</table>

## Extension Methods
<table>
<tr>
<td><a href="M_Avalonia_Platform_Storage_StorageProviderExtensions_TryGetFileFromPathAsync">TryGetFileFromPathAsync(String)</a></td>
<td><br />(Defined by <a href="T_Avalonia_Platform_Storage_StorageProviderExtensions">StorageProviderExtensions</a>)</td></tr>
<tr>
<td><a href="M_Avalonia_Platform_Storage_StorageProviderExtensions_TryGetFolderFromPathAsync">TryGetFolderFromPathAsync(String)</a></td>
<td><br />(Defined by <a href="T_Avalonia_Platform_Storage_StorageProviderExtensions">StorageProviderExtensions</a>)</td></tr>
</table>

## See Also


#### Reference
<a href="N_Avalonia_Platform_Storage">Avalonia.Platform.Storage Namespace</a>  
