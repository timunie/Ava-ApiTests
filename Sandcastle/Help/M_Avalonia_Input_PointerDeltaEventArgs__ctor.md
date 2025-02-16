---
title:PointerDeltaEventArgs Constructor
description: Autogenertated API Reference page
hide_table_of_contents: false
---
# PointerDeltaEventArgs Constructor


Initializes a new instance of the <a href="T_Avalonia_Input_PointerDeltaEventArgs">PointerDeltaEventArgs</a> class



## Definition
**Namespace:** <a href="N_Avalonia_Input">Avalonia.Input</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.4

**C#**
``` C#
[UnstableAttribute("This constructor might be removed in 12.0.")]
public PointerDeltaEventArgs(
	RoutedEvent routedEvent,
	Object? source,
	IPointer pointer,
	Visual rootVisual,
	Point rootVisualPosition,
	ulong timestamp,
	PointerPointProperties properties,
	KeyModifiers modifiers,
	Vector delta
)
```
**VB**
``` VB
<UnstableAttribute("This constructor might be removed in 12.0.")>
Public Sub New ( 
	routedEvent As RoutedEvent,
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
**F#**
``` F#
[<UnstableAttribute("This constructor might be removed in 12.0.")>]
new : 
        routedEvent : RoutedEvent * 
        source : Object * 
        pointer : IPointer * 
        rootVisual : Visual * 
        rootVisualPosition : Point * 
        timestamp : uint64 * 
        properties : PointerPointProperties * 
        modifiers : KeyModifiers * 
        delta : Vector -> PointerDeltaEventArgs
```



#### Parameters
<dl><dt>  <a href="T_Avalonia_Interactivity_RoutedEvent">RoutedEvent</a></dt><dd> </dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a></dt><dd> </dd><dt>  <a href="T_Avalonia_Input_IPointer">IPointer</a></dt><dd> </dd><dt>  <a href="T_Avalonia_Visual">Visual</a></dt><dd> </dd><dt>  <a href="T_Avalonia_Point">Point</a></dt><dd> </dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.uint64" target="_blank" rel="noopener noreferrer">UInt64</a></dt><dd> </dd><dt>  <a href="T_Avalonia_Input_PointerPointProperties">PointerPointProperties</a></dt><dd> </dd><dt>  <a href="T_Avalonia_Input_KeyModifiers">KeyModifiers</a></dt><dd> </dd><dt>  <a href="T_Avalonia_Vector">Vector</a></dt><dd> </dd></dl>

## See Also


#### Reference
<a href="T_Avalonia_Input_PointerDeltaEventArgs">PointerDeltaEventArgs Class</a>  
<a href="N_Avalonia_Input">Avalonia.Input Namespace</a>  
