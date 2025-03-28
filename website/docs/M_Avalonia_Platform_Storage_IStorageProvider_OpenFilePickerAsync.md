# OpenFilePickerAsync Method


Opens file picker dialog.



## Definition
**Namespace:** <a href="N_Avalonia_Platform_Storage">Avalonia.Platform.Storage</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
Task<IReadOnlyList<IStorageFile>> OpenFilePickerAsync(
	FilePickerOpenOptions options
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Function OpenFilePickerAsync ( 
	options As FilePickerOpenOptions
) As Task(Of IReadOnlyList(Of IStorageFile))
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
abstract OpenFilePickerAsync : 
        options : FilePickerOpenOptions -> Task<IReadOnlyList<IStorageFile>> 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Platform/Storage/IStorageProvider.cs" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="T_Avalonia_Platform_Storage_FilePickerOpenOptions">FilePickerOpenOptions</a></dt><dd> </dd></dl>

#### Return Value
<a href="https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1" target="_blank" rel="noopener noreferrer">Task</a>(<a href="https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist-1" target="_blank" rel="noopener noreferrer">IReadOnlyList</a>(<a href="T_Avalonia_Platform_Storage_IStorageFile">IStorageFile</a>))  
Array of selected <a href="T_Avalonia_Platform_Storage_IStorageFile">IStorageFile</a> or empty collection if user canceled the dialog.

## See Also


#### Reference
<a href="T_Avalonia_Platform_Storage_IStorageProvider">IStorageProvider Interface</a>  
<a href="N_Avalonia_Platform_Storage">Avalonia.Platform.Storage Namespace</a>  

