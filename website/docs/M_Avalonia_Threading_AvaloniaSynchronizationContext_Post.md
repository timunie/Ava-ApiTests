# Post Method


When overridden in a derived class, dispatches an asynchronous message to a synchronization context.



## Definition
**Namespace:** <a href="N_Avalonia_Threading">Avalonia.Threading</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public override void Post(
	SendOrPostCallback d,
	Object? state
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Overrides Sub Post ( 
	d As SendOrPostCallback,
	state As Object
)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
abstract Post : 
        d : SendOrPostCallback * 
        state : Object -> unit 
override Post : 
        d : SendOrPostCallback * 
        state : Object -> unit 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Threading/AvaloniaSynchronizationContext.cs#L63" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.threading.sendorpostcallback" target="_blank" rel="noopener noreferrer">SendOrPostCallback</a></dt><dd>The <a href="https://learn.microsoft.com/dotnet/api/system.threading.sendorpostcallback" target="_blank" rel="noopener noreferrer">SendOrPostCallback</a> delegate to call.</dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a></dt><dd>The object passed to the delegate.</dd></dl>

## See Also


#### Reference
<a href="T_Avalonia_Threading_AvaloniaSynchronizationContext">AvaloniaSynchronizationContext Class</a>  
<a href="N_Avalonia_Threading">Avalonia.Threading Namespace</a>  
