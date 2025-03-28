# SaveBookmarkAsync Method


Saves items to a bookmark.



## Definition
**Namespace:** <a href="N_Avalonia_Platform_Storage">Avalonia.Platform.Storage</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
Task<string?> SaveBookmarkAsync()
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Function SaveBookmarkAsync As Task(Of String)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
abstract SaveBookmarkAsync : unit -> Task<string> 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Platform/Storage/IStorageItem.cs" title="View the source code">View Source</a>



#### Return Value
<a href="https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1" target="_blank" rel="noopener noreferrer">Task</a>(<a href="https://learn.microsoft.com/dotnet/api/system.string" target="_blank" rel="noopener noreferrer">String</a>)  
Returns identifier of a bookmark. Can be null if OS denied request.

## See Also


#### Reference
<a href="T_Avalonia_Platform_Storage_IStorageItem">IStorageItem Interface</a>  
<a href="N_Avalonia_Platform_Storage">Avalonia.Platform.Storage Namespace</a>  

