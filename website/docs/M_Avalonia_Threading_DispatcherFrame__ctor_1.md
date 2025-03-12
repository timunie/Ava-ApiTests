# DispatcherFrame(Boolean) Constructor


Constructs a new instance of the DispatcherFrame class.



## Definition
**Namespace:** <a href="N_Avalonia_Threading">Avalonia.Threading</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public DispatcherFrame(
	bool exitWhenRequested
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Sub New ( 
	exitWhenRequested As Boolean
)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
new : 
        exitWhenRequested : bool -> DispatcherFrame
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Threading/DispatcherFrame.cs#L41" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">Boolean</a></dt><dd>Indicates whether or not this frame will exit when all frames are requested to exit. <p /> Dispatcher frames typically break down into two categories: 1) Long running, general purpose frames, that exit only when told to. These frames should exit when requested. 2) Short running, very specific frames that exit themselves when an important criteria is met. These frames may consider not exiting when requested in favor of waiting for their important criteria to be met. These frames should have a timeout associated with them.</dd></dl>

## See Also


#### Reference
<a href="T_Avalonia_Threading_DispatcherFrame">DispatcherFrame Class</a>  
<a href="Overload_Avalonia_Threading_DispatcherFrame__ctor">DispatcherFrame Overload</a>  
<a href="N_Avalonia_Threading">Avalonia.Threading Namespace</a>  

