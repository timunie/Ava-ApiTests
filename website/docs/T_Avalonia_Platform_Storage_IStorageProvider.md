# IStorageProvider Interface




## Definition
**Namespace:** <a href="N_Avalonia_Platform_Storage">Avalonia.Platform.Storage</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
[NotClientImplementableAttribute]
public interface IStorageProvider
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
<NotClientImplementableAttribute>
Public Interface IStorageProvider
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
[<NotClientImplementableAttribute>]
type IStorageProvider = interface end
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Platform/Storage/IStorageProvider.cs" title="View the source code">View Source</a>



## Properties
<table>
<tr>
<td><a href="P_Avalonia_Platform_Storage_IStorageProvider_CanOpen">CanOpen</a></td>
<td>Returns true if it's possible to open file picker on the current platform.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Platform_Storage_IStorageProvider_CanPickFolder">CanPickFolder</a></td>
<td>Returns true if it's possible to open folder picker on the current platform.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Platform_Storage_IStorageProvider_CanSave">CanSave</a></td>
<td>Returns true if it's possible to open save file picker on the current platform.</td>
</tr>
</table>

## Methods
<table>
<tr>
<td><a href="M_Avalonia_Platform_Storage_IStorageProvider_OpenFileBookmarkAsync">OpenFileBookmarkAsync(String)</a></td>
<td>Open <a href="T_Avalonia_Platform_Storage_IStorageBookmarkFile">IStorageBookmarkFile</a> from the bookmark ID.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Platform_Storage_IStorageProvider_OpenFilePickerAsync">OpenFilePickerAsync(FilePickerOpenOptions)</a></td>
<td>Opens file picker dialog.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Platform_Storage_IStorageProvider_OpenFolderBookmarkAsync">OpenFolderBookmarkAsync(String)</a></td>
<td>Open <a href="T_Avalonia_Platform_Storage_IStorageBookmarkFolder">IStorageBookmarkFolder</a> from the bookmark ID.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Platform_Storage_IStorageProvider_OpenFolderPickerAsync">OpenFolderPickerAsync(FolderPickerOpenOptions)</a></td>
<td>Opens folder picker dialog.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Platform_Storage_IStorageProvider_SaveFilePickerAsync">SaveFilePickerAsync(FilePickerSaveOptions)</a></td>
<td>Opens save file picker dialog.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Platform_Storage_IStorageProvider_TryGetFileFromPathAsync">TryGetFileFromPathAsync(Uri)</a></td>
<td>Attempts to read file from the file-system by its path.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Platform_Storage_IStorageProvider_TryGetFolderFromPathAsync">TryGetFolderFromPathAsync(Uri)</a></td>
<td>Attempts to read folder from the file-system by its path.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Platform_Storage_IStorageProvider_TryGetWellKnownFolderAsync">TryGetWellKnownFolderAsync(WellKnownFolder)</a></td>
<td>Attempts to read folder from the file-system by its path</td>
</tr>
</table>

## Extension Methods
<table>
<tr>
<td><a href="M_Avalonia_Platform_Storage_StorageProviderExtensions_TryGetFileFromPathAsync">TryGetFileFromPathAsync(String)</a></td>
<td>Attempts to read file from the file-system by its path.<br />(Defined by <a href="T_Avalonia_Platform_Storage_StorageProviderExtensions">StorageProviderExtensions</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Platform_Storage_StorageProviderExtensions_TryGetFolderFromPathAsync">TryGetFolderFromPathAsync(String)</a></td>
<td>Attempts to read folder from the file-system by its path.<br />(Defined by <a href="T_Avalonia_Platform_Storage_StorageProviderExtensions">StorageProviderExtensions</a>)</td>
</tr>
</table>

## See Also


#### Reference
<a href="N_Avalonia_Platform_Storage">Avalonia.Platform.Storage Namespace</a>  

