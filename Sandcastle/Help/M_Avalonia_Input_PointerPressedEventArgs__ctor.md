---
title:PointerPressedEventArgs Constructor
description: Autogenertated API Reference page
hide_table_of_contents: false
---
# PointerPressedEventArgs Constructor


Initializes a new instance of the <a href="T_Avalonia_Input_PointerPressedEventArgs">PointerPressedEventArgs</a> class



## Definition
**Namespace:** <a href="N_Avalonia_Input">Avalonia.Input</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.4

**C#**
``` C#
[UnstableAttribute("This constructor might be removed in 12.0. For unit testing, consider using IHeadlessWindow mouse methods.")]
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
**VB**
``` VB
<UnstableAttribute("This constructor might be removed in 12.0. For unit testing, consider using IHeadlessWindow mouse methods.")>
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
**F#**
``` F#
[<UnstableAttribute("This constructor might be removed in 12.0. For unit testing, consider using IHeadlessWindow mouse methods.")>]
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



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a></dt><dd> </dd><dt>  <a href="T_Avalonia_Input_IPointer">IPointer</a></dt><dd> </dd><dt>  <a href="T_Avalonia_Visual">Visual</a></dt><dd> </dd><dt>  <a href="T_Avalonia_Point">Point</a></dt><dd> </dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.uint64" target="_blank" rel="noopener noreferrer">UInt64</a></dt><dd> </dd><dt>  <a href="T_Avalonia_Input_PointerPointProperties">PointerPointProperties</a></dt><dd> </dd><dt>  <a href="T_Avalonia_Input_KeyModifiers">KeyModifiers</a></dt><dd> </dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.int32" target="_blank" rel="noopener noreferrer">Int32</a>  (Optional)</dt><dd> </dd></dl>

## See Also


#### Reference
<a href="T_Avalonia_Input_PointerPressedEventArgs">PointerPressedEventArgs Class</a>  
<a href="N_Avalonia_Input">Avalonia.Input Namespace</a>  
