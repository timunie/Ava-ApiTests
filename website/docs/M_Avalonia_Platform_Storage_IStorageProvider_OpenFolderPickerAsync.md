# OpenFolderPickerAsync Method


Opens folder picker dialog.



## Definition
**Namespace:** <a href="N_Avalonia_Platform_Storage">Avalonia.Platform.Storage</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
Task<IReadOnlyList<IStorageFolder>> OpenFolderPickerAsync(
	FolderPickerOpenOptions options
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Function OpenFolderPickerAsync ( 
	options As FolderPickerOpenOptions
) As Task(Of IReadOnlyList(Of IStorageFolder))
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
abstract OpenFolderPickerAsync : 
        options : FolderPickerOpenOptions -> Task<IReadOnlyList<IStorageFolder>> 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Platform/Storage/IStorageProvider.cs" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="T_Avalonia_Platform_Storage_FolderPickerOpenOptions">FolderPickerOpenOptions</a></dt><dd> </dd></dl>

#### Return Value
<a href="https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1" target="_blank" rel="noopener noreferrer">Task</a>(<a href="https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist-1" target="_blank" rel="noopener noreferrer">IReadOnlyList</a>(<a href="T_Avalonia_Platform_Storage_IStorageFolder">IStorageFolder</a>))  
Array of selected <a href="T_Avalonia_Platform_Storage_IStorageFolder">IStorageFolder</a> or empty collection if user canceled the dialog.

## See Also


#### Reference
<a href="T_Avalonia_Platform_Storage_IStorageProvider">IStorageProvider Interface</a>  
<a href="N_Avalonia_Platform_Storage">Avalonia.Platform.Storage Namespace</a>  
