# OpenFolderBookmarkAsync Method


Open <a href="T_Avalonia_Platform_Storage_IStorageBookmarkFolder">IStorageBookmarkFolder</a> from the bookmark ID.



## Definition
**Namespace:** <a href="N_Avalonia_Platform_Storage">Avalonia.Platform.Storage</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
Task<IStorageBookmarkFolder?> OpenFolderBookmarkAsync(
	string bookmark
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Function OpenFolderBookmarkAsync ( 
	bookmark As String
) As Task(Of IStorageBookmarkFolder)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
abstract OpenFolderBookmarkAsync : 
        bookmark : string -> Task<IStorageBookmarkFolder> 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Platform/Storage/IStorageProvider.cs" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.string" target="_blank" rel="noopener noreferrer">String</a></dt><dd>Bookmark ID.</dd></dl>

#### Return Value
<a href="https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1" target="_blank" rel="noopener noreferrer">Task</a>(<a href="T_Avalonia_Platform_Storage_IStorageBookmarkFolder">IStorageBookmarkFolder</a>)  
Bookmarked folder or null if OS denied request.

## See Also


#### Reference
<a href="T_Avalonia_Platform_Storage_IStorageProvider">IStorageProvider Interface</a>  
<a href="N_Avalonia_Platform_Storage">Avalonia.Platform.Storage Namespace</a>  

