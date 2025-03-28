# PointerEventArgs Constructor


Initializes a new instance of the <a href="T_Avalonia_Input_PointerEventArgs">PointerEventArgs</a> class



## Definition
**Namespace:** <a href="N_Avalonia_Input">Avalonia.Input</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
[UnstableAttribute("This constructor might be removed in 12.0. For unit testing, consider using IHeadlessWindow mouse methods.")]
public PointerEventArgs(
	RoutedEvent routedEvent,
	Object? source,
	IPointer pointer,
	Visual? rootVisual,
	Point rootVisualPosition,
	ulong timestamp,
	PointerPointProperties properties,
	KeyModifiers modifiers
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
<UnstableAttribute("This constructor might be removed in 12.0. For unit testing, consider using IHeadlessWindow mouse methods.")>
Public Sub New ( 
	routedEvent As RoutedEvent,
	source As Object,
	pointer As IPointer,
	rootVisual As Visual,
	rootVisualPosition As Point,
	timestamp As ULong,
	properties As PointerPointProperties,
	modifiers As KeyModifiers
)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
[<UnstableAttribute("This constructor might be removed in 12.0. For unit testing, consider using IHeadlessWindow mouse methods.")>]
new : 
        routedEvent : RoutedEvent * 
        source : Object * 
        pointer : IPointer * 
        rootVisual : Visual * 
        rootVisualPosition : Point * 
        timestamp : uint64 * 
        properties : PointerPointProperties * 
        modifiers : KeyModifiers -> PointerEventArgs
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Input/PointerEventArgs.cs#L25" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="T_Avalonia_Interactivity_RoutedEvent">RoutedEvent</a></dt><dd> </dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a></dt><dd> </dd><dt>  <a href="T_Avalonia_Input_IPointer">IPointer</a></dt><dd> </dd><dt>  <a href="T_Avalonia_Visual">Visual</a></dt><dd> </dd><dt>  <a href="T_Avalonia_Point">Point</a></dt><dd> </dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.uint64" target="_blank" rel="noopener noreferrer">UInt64</a></dt><dd> </dd><dt>  <a href="T_Avalonia_Input_PointerPointProperties">PointerPointProperties</a></dt><dd> </dd><dt>  <a href="T_Avalonia_Input_KeyModifiers">KeyModifiers</a></dt><dd> </dd></dl>

## See Also


#### Reference
<a href="T_Avalonia_Input_PointerEventArgs">PointerEventArgs Class</a>  
<a href="N_Avalonia_Input">Avalonia.Input Namespace</a>  

