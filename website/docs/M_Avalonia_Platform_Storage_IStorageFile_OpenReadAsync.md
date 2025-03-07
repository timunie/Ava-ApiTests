# OpenReadAsync Method


Opens a stream for read access.



## Definition
**Namespace:** <a href="N_Avalonia_Platform_Storage">Avalonia.Platform.Storage</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
Task<Stream> OpenReadAsync()
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Function OpenReadAsync As Task(Of Stream)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
abstract OpenReadAsync : unit -> Task<Stream> 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Platform/Storage/IStorageFile.cs" title="View the source code">View Source</a>



#### Return Value
<a href="https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1" target="_blank" rel="noopener noreferrer">Task</a>(<a href="https://learn.microsoft.com/dotnet/api/system.io.stream" target="_blank" rel="noopener noreferrer">Stream</a>)

## Exceptions
<table>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.unauthorizedaccessexception" target="_blank" rel="noopener noreferrer">UnauthorizedAccessException</a></td>
<td />
</tr>
</table>

## See Also


#### Reference
<a href="T_Avalonia_Platform_Storage_IStorageFile">IStorageFile Interface</a>  
<a href="N_Avalonia_Platform_Storage">Avalonia.Platform.Storage Namespace</a>  
