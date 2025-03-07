# StartCore Method


Provides the implementation of starting the timer.



## Definition
**Namespace:** <a href="N_Avalonia_Rendering">Avalonia.Rendering</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
protected virtual IDisposable StartCore(
	Action<TimeSpan> tick
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Protected Overridable Function StartCore ( 
	tick As Action(Of TimeSpan)
) As IDisposable
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
abstract StartCore : 
        tick : Action<TimeSpan> -> IDisposable 
override StartCore : 
        tick : Action<TimeSpan> -> IDisposable 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Rendering/DefaultRenderTimer.cs#L82" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.action-1" target="_blank" rel="noopener noreferrer">Action</a>(<a href="https://learn.microsoft.com/dotnet/api/system.timespan" target="_blank" rel="noopener noreferrer">TimeSpan</a>)</dt><dd>The method to call on each tick.</dd></dl>

#### Return Value
<a href="https://learn.microsoft.com/dotnet/api/system.idisposable" target="_blank" rel="noopener noreferrer">IDisposable</a>This can be overridden by platform implementations to use a specialized timer implementation.

## See Also


#### Reference
<a href="T_Avalonia_Rendering_DefaultRenderTimer">DefaultRenderTimer Class</a>  
<a href="N_Avalonia_Rendering">Avalonia.Rendering Namespace</a>  
