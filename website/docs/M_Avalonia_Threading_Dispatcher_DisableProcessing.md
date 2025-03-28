# DisableProcessing Method


Disable the event processing of the dispatcher.



## Definition
**Namespace:** <a href="N_Avalonia_Threading">Avalonia.Threading</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public Dispatcher.DispatcherProcessingDisabled DisableProcessing()
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Function DisableProcessing As Dispatcher.DispatcherProcessingDisabled
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
member DisableProcessing : unit -> Dispatcher.DispatcherProcessingDisabled 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Threading/Dispatcher.MainLoop.cs#L200" title="View the source code">View Source</a>



#### Return Value
<a href="T_Avalonia_Threading_Dispatcher_DispatcherProcessingDisabled">Dispatcher.DispatcherProcessingDisabled</a>

## Remarks
This is an advanced method intended to eliminate the chance of unrelated reentrancy. The effect of disabling processing is: 1) CLR locks will not pump messages internally. 2) No one is allowed to push a frame. 3) No message processing is permitted.

## See Also


#### Reference
<a href="T_Avalonia_Threading_Dispatcher">Dispatcher Class</a>  
<a href="N_Avalonia_Threading">Avalonia.Threading Namespace</a>  

