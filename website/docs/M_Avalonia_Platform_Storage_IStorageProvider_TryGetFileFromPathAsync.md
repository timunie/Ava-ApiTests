# TryGetFileFromPathAsync Method


Attempts to read file from the file-system by its path.



## Definition
**Namespace:** <a href="N_Avalonia_Platform_Storage">Avalonia.Platform.Storage</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
Task<IStorageFile?> TryGetFileFromPathAsync(
	Uri filePath
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Function TryGetFileFromPathAsync ( 
	filePath As Uri
) As Task(Of IStorageFile)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
abstract TryGetFileFromPathAsync : 
        filePath : Uri -> Task<IStorageFile> 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Platform/Storage/IStorageProvider.cs" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.uri" target="_blank" rel="noopener noreferrer">Uri</a></dt><dd>The path of the item to retrieve in Uri format.</dd></dl>

#### Return Value
<a href="https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1" target="_blank" rel="noopener noreferrer">Task</a>(<a href="T_Avalonia_Platform_Storage_IStorageFile">IStorageFile</a>)  
File or null if it doesn't exist.Uri path is usually expected to be an absolute path with "file" scheme. But it can be an uri with "content" scheme on the Android. It also might ask user for the permission, and throw an exception if it was denied.

## See Also


#### Reference
<a href="T_Avalonia_Platform_Storage_IStorageProvider">IStorageProvider Interface</a>  
<a href="N_Avalonia_Platform_Storage">Avalonia.Platform.Storage Namespace</a>  
