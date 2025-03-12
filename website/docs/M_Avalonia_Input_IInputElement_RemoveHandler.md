# RemoveHandler Method


Removes a handler for the specified routed event.



## Definition
**Namespace:** <a href="N_Avalonia_Input">Avalonia.Input</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
void RemoveHandler(
	RoutedEvent routedEvent,
	Delegate handler
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Sub RemoveHandler ( 
	routedEvent As RoutedEvent,
	handler As Delegate
)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
abstract RemoveHandler : 
        routedEvent : RoutedEvent * 
        handler : Delegate -> unit 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Input/IInputElement.cs" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="T_Avalonia_Interactivity_RoutedEvent">RoutedEvent</a></dt><dd>The routed event.</dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.delegate" target="_blank" rel="noopener noreferrer">Delegate</a></dt><dd>The handler.</dd></dl>

## See Also


#### Reference
<a href="T_Avalonia_Input_IInputElement">IInputElement Interface</a>  
<a href="N_Avalonia_Input">Avalonia.Input Namespace</a>  

