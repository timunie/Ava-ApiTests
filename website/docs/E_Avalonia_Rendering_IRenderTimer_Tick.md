# Tick Event


Raised when the render timer ticks to signal a new frame should be drawn.



## Definition
**Namespace:** <a href="N_Avalonia_Rendering">Avalonia.Rendering</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
event Action<TimeSpan> Tick
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Event Tick As Action(Of TimeSpan)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
abstract Tick : IEvent<Action<TimeSpan>,
    EventArgs>
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Rendering/IRenderTimer.cs" title="View the source code">View Source</a>



#### Value
<a href="https://learn.microsoft.com/dotnet/api/system.action-1" target="_blank" rel="noopener noreferrer">Action</a>(<a href="https://learn.microsoft.com/dotnet/api/system.timespan" target="_blank" rel="noopener noreferrer">TimeSpan</a>)This event can be raised on any thread; it is the responsibility of the subscriber to switch execution to the right thread.

## See Also


#### Reference
<a href="T_Avalonia_Rendering_IRenderTimer">IRenderTimer Interface</a>  
<a href="N_Avalonia_Rendering">Avalonia.Rendering Namespace</a>  
