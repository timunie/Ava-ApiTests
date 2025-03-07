# LaunchUriAsync Method


Starts the default app associated with the URI scheme name for the specified URI.



## Definition
**Namespace:** <a href="N_Avalonia_Platform_Storage">Avalonia.Platform.Storage</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
Task<bool> LaunchUriAsync(
	Uri uri
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Function LaunchUriAsync ( 
	uri As Uri
) As Task(Of Boolean)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
abstract LaunchUriAsync : 
        uri : Uri -> Task<bool> 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Platform/Storage/ILauncher.cs" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.uri" target="_blank" rel="noopener noreferrer">Uri</a></dt><dd>The URI.</dd></dl>

#### Return Value
<a href="https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1" target="_blank" rel="noopener noreferrer">Task</a>(<a href="https://learn.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">Boolean</a>)  
True, if launch operation was successful. False, if unsupported or failed.

## See Also


#### Reference
<a href="T_Avalonia_Platform_Storage_ILauncher">ILauncher Interface</a>  
<a href="N_Avalonia_Platform_Storage">Avalonia.Platform.Storage Namespace</a>  
