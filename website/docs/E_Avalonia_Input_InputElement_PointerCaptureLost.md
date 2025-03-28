# PointerCaptureLost Event


Occurs when the control or its child control loses the pointer capture for any reason, event will not be triggered for a parent control if capture was transferred to another child of that parent control



## Definition
**Namespace:** <a href="N_Avalonia_Input">Avalonia.Input</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public event EventHandler<PointerCaptureLostEventArgs> PointerCaptureLost
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Event PointerCaptureLost As EventHandler(Of PointerCaptureLostEventArgs)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
member PointerCaptureLost : IEvent<EventHandler<PointerCaptureLostEventArgs>,
    PointerCaptureLostEventArgs>
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Input/InputElement.cs" title="View the source code">View Source</a>



#### Value
<a href="https://learn.microsoft.com/dotnet/api/system.eventhandler-1" target="_blank" rel="noopener noreferrer">EventHandler</a>(<a href="T_Avalonia_Input_PointerCaptureLostEventArgs">PointerCaptureLostEventArgs</a>)

## See Also


#### Reference
<a href="T_Avalonia_Input_InputElement">InputElement Class</a>  
<a href="N_Avalonia_Input">Avalonia.Input Namespace</a>  

