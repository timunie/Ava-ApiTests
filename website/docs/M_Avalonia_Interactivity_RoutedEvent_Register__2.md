# Register&lt;TOwner, TEventArgs&gt;(String, RoutingStrategies) Method




## Definition
**Namespace:** <a href="N_Avalonia_Interactivity">Avalonia.Interactivity</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public static RoutedEvent<TEventArgs> Register<TOwner, TEventArgs>(
	string name,
	RoutingStrategies routingStrategy
)
where TEventArgs : RoutedEventArgs

```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Shared Function Register(Of TOwner, TEventArgs As RoutedEventArgs) ( 
	name As String,
	routingStrategy As RoutingStrategies
) As RoutedEvent(Of TEventArgs)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
static member Register : 
        name : string * 
        routingStrategy : RoutingStrategies -> RoutedEvent<'TEventArgs>  when 'TEventArgs : RoutedEventArgs
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Interactivity/RoutedEvent.cs#L58" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.string" target="_blank" rel="noopener noreferrer">String</a></dt><dd> </dd><dt>  <a href="T_Avalonia_Interactivity_RoutingStrategies">RoutingStrategies</a></dt><dd> </dd></dl>

#### Type Parameters
<dl><dt /><dd /><dt /><dd /></dl>

#### Return Value
<a href="T_Avalonia_Interactivity_RoutedEvent_1">RoutedEvent</a>(TEventArgs)

## See Also


#### Reference
<a href="T_Avalonia_Interactivity_RoutedEvent">RoutedEvent Class</a>  
<a href="Overload_Avalonia_Interactivity_RoutedEvent_Register">Register Overload</a>  
<a href="N_Avalonia_Interactivity">Avalonia.Interactivity Namespace</a>  

