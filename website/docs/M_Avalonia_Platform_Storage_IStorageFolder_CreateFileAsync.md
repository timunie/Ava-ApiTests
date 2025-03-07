# CreateFileAsync Method


Creates a file with specified name as a child of the current storage folder



## Definition
**Namespace:** <a href="N_Avalonia_Platform_Storage">Avalonia.Platform.Storage</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
Task<IStorageFile?> CreateFileAsync(
	string name
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Function CreateFileAsync ( 
	name As String
) As Task(Of IStorageFile)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
abstract CreateFileAsync : 
        name : string -> Task<IStorageFile> 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Platform/Storage/IStorageFolder.cs" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.string" target="_blank" rel="noopener noreferrer">String</a></dt><dd>The display name</dd></dl>

#### Return Value
<a href="https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1" target="_blank" rel="noopener noreferrer">Task</a>(<a href="T_Avalonia_Platform_Storage_IStorageFile">IStorageFile</a>)  
A new <a href="T_Avalonia_Platform_Storage_IStorageFile">IStorageFile</a> pointing to the moved file. If not null, the current storage item becomes invalid

## See Also


#### Reference
<a href="T_Avalonia_Platform_Storage_IStorageFolder">IStorageFolder Interface</a>  
<a href="N_Avalonia_Platform_Storage">Avalonia.Platform.Storage Namespace</a>  
