# Send Method


When overridden in a derived class, dispatches a synchronous message to a synchronization context.



## Definition
**Namespace:** <a href="N_Avalonia_Threading">Avalonia.Threading</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public override void Send(
	SendOrPostCallback d,
	Object? state
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Overrides Sub Send ( 
	d As SendOrPostCallback,
	state As Object
)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
abstract Send : 
        d : SendOrPostCallback * 
        state : Object -> unit 
override Send : 
        d : SendOrPostCallback * 
        state : Object -> unit 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Threading/AvaloniaSynchronizationContext.cs#L69" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.threading.sendorpostcallback" target="_blank" rel="noopener noreferrer">SendOrPostCallback</a></dt><dd>The <a href="https://learn.microsoft.com/dotnet/api/system.threading.sendorpostcallback" target="_blank" rel="noopener noreferrer">SendOrPostCallback</a> delegate to call.</dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a></dt><dd>The object passed to the delegate.</dd></dl>

## Exceptions
<table>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.notsupportedexception" target="_blank" rel="noopener noreferrer">NotSupportedException</a></td>
<td>The method was called in a Windows Store app. The implementation of <a href="https://learn.microsoft.com/dotnet/api/system.threading.synchronizationcontext" target="_blank" rel="noopener noreferrer">SynchronizationContext</a> for Windows Store apps does not support the <a href="https://learn.microsoft.com/dotnet/api/system.threading.synchronizationcontext.send" target="_blank" rel="noopener noreferrer">Send(SendOrPostCallback, Object)</a> method.</td>
</tr>
</table>

## See Also


#### Reference
<a href="T_Avalonia_Threading_AvaloniaSynchronizationContext">AvaloniaSynchronizationContext Class</a>  
<a href="N_Avalonia_Threading">Avalonia.Threading Namespace</a>  
