# ExterinalGLibMainLoopExceptionLogger Property


If Avalonia is in control of a run loop, we propagate exceptions by stopping the run loop frame and rethrowing an exception. However, if there is no Avalonia-controlled run loop frame, there is no way to report such exceptions, since allowing those to escape native-&gt;managed call boundary will likely brick GLib machinery since it's not aware of managed Exceptions This property allows to inspect such exceptions before they will be ignored



## Definition
**Namespace:** <a href="N_Avalonia">Avalonia</a>  
**Assembly:** Avalonia.X11 (in Avalonia.X11.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public Action<Exception>? ExterinalGLibMainLoopExceptionLogger { get; set; }
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Property ExterinalGLibMainLoopExceptionLogger As Action(Of Exception)
	Get
	Set
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
member ExterinalGLibMainLoopExceptionLogger : Action<Exception> with get, set
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.X11/X11Platform.cs#L389" title="View the source code">View Source</a>



#### Property Value
<a href="https://learn.microsoft.com/dotnet/api/system.action-1" target="_blank" rel="noopener noreferrer">Action</a>(<a href="https://learn.microsoft.com/dotnet/api/system.exception" target="_blank" rel="noopener noreferrer">Exception</a>)

## See Also


#### Reference
<a href="T_Avalonia_X11PlatformOptions">X11PlatformOptions Class</a>  
<a href="N_Avalonia">Avalonia Namespace</a>  

