# PointerWheelEventArgs Constructor


Initializes a new instance of the <a href="T_Avalonia_Input_PointerWheelEventArgs">PointerWheelEventArgs</a> class



## Definition
**Namespace:** <a href="N_Avalonia_Input">Avalonia.Input</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
[UnstableAttribute("This constructor might be removed in 12.0. For unit testing, consider using IHeadlessWindow.MouseWheel.")]
public PointerWheelEventArgs(
	Object source,
	IPointer pointer,
	Visual rootVisual,
	Point rootVisualPosition,
	ulong timestamp,
	PointerPointProperties properties,
	KeyModifiers modifiers,
	Vector delta
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
<UnstableAttribute("This constructor might be removed in 12.0. For unit testing, consider using IHeadlessWindow.MouseWheel.")>
Public Sub New ( 
	source As Object,
	pointer As IPointer,
	rootVisual As Visual,
	rootVisualPosition As Point,
	timestamp As ULong,
	properties As PointerPointProperties,
	modifiers As KeyModifiers,
	delta As Vector
)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
[<UnstableAttribute("This constructor might be removed in 12.0. For unit testing, consider using IHeadlessWindow.MouseWheel.")>]
new : 
        source : Object * 
        pointer : IPointer * 
        rootVisual : Visual * 
        rootVisualPosition : Point * 
        timestamp : uint64 * 
        properties : PointerPointProperties * 
        modifiers : KeyModifiers * 
        delta : Vector -> PointerWheelEventArgs
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Input/PointerWheelEventArgs.cs#L16" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a></dt><dd> </dd><dt>  <a href="T_Avalonia_Input_IPointer">IPointer</a></dt><dd> </dd><dt>  <a href="T_Avalonia_Visual">Visual</a></dt><dd> </dd><dt>  <a href="T_Avalonia_Point">Point</a></dt><dd> </dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.uint64" target="_blank" rel="noopener noreferrer">UInt64</a></dt><dd> </dd><dt>  <a href="T_Avalonia_Input_PointerPointProperties">PointerPointProperties</a></dt><dd> </dd><dt>  <a href="T_Avalonia_Input_KeyModifiers">KeyModifiers</a></dt><dd> </dd><dt>  <a href="T_Avalonia_Vector">Vector</a></dt><dd> </dd></dl>

## See Also


#### Reference
<a href="T_Avalonia_Input_PointerWheelEventArgs">PointerWheelEventArgs Class</a>  
<a href="N_Avalonia_Input">Avalonia.Input Namespace</a>  

