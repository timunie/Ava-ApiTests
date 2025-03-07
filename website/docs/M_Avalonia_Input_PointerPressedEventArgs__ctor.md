# PointerPressedEventArgs Constructor


Initializes a new instance of the <a href="T_Avalonia_Input_PointerPressedEventArgs">PointerPressedEventArgs</a> class



## Definition
**Namespace:** <a href="N_Avalonia_Input">Avalonia.Input</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public PointerPressedEventArgs(
	Object source,
	IPointer pointer,
	Visual rootVisual,
	Point rootVisualPosition,
	ulong timestamp,
	PointerPointProperties properties,
	KeyModifiers modifiers,
	int clickCount = 1
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Sub New ( 
	source As Object,
	pointer As IPointer,
	rootVisual As Visual,
	rootVisualPosition As Point,
	timestamp As ULong,
	properties As PointerPointProperties,
	modifiers As KeyModifiers,
	Optional clickCount As Integer = 1
)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
new : 
        source : Object * 
        pointer : IPointer * 
        rootVisual : Visual * 
        rootVisualPosition : Point * 
        timestamp : uint64 * 
        properties : PointerPointProperties * 
        modifiers : KeyModifiers * 
        ?clickCount : int 
(* Defaults:
        let _clickCount = defaultArg clickCount 1
*)
-> PointerPressedEventArgs
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Input/PointerEventArgs.cs#L172" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a></dt><dd> </dd><dt>  <a href="T_Avalonia_Input_IPointer">IPointer</a></dt><dd> </dd><dt>  <a href="T_Avalonia_Visual">Visual</a></dt><dd> </dd><dt>  <a href="T_Avalonia_Point">Point</a></dt><dd> </dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.uint64" target="_blank" rel="noopener noreferrer">UInt64</a></dt><dd> </dd><dt>  <a href="T_Avalonia_Input_PointerPointProperties">PointerPointProperties</a></dt><dd> </dd><dt>  <a href="T_Avalonia_Input_KeyModifiers">KeyModifiers</a></dt><dd> </dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.int32" target="_blank" rel="noopener noreferrer">Int32</a>  (Optional)</dt><dd> </dd></dl>

## See Also


#### Reference
<a href="T_Avalonia_Input_PointerPressedEventArgs">PointerPressedEventArgs Class</a>  
<a href="N_Avalonia_Input">Avalonia.Input Namespace</a>  
