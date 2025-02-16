---
title:DragEventArgs Constructor
description: Autogenertated API Reference page
hide_table_of_contents: false
---
# DragEventArgs Constructor


Initializes a new instance of the <a href="T_Avalonia_Input_DragEventArgs">DragEventArgs</a> class



## Definition
**Namespace:** <a href="N_Avalonia_Input">Avalonia.Input</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.4

**C#**
``` C#
[UnstableAttribute("This constructor might be removed in 12.0. For unit testing, consider using DragDrop.DoDragDrop or IHeadlessWindow.DragDrop.")]
public DragEventArgs(
	RoutedEvent<DragEventArgs> routedEvent,
	IDataObject data,
	Interactive target,
	Point targetLocation,
	KeyModifiers keyModifiers
)
```
**VB**
``` VB
<UnstableAttribute("This constructor might be removed in 12.0. For unit testing, consider using DragDrop.DoDragDrop or IHeadlessWindow.DragDrop.")>
Public Sub New ( 
	routedEvent As RoutedEvent(Of DragEventArgs),
	data As IDataObject,
	target As Interactive,
	targetLocation As Point,
	keyModifiers As KeyModifiers
)
```
**F#**
``` F#
[<UnstableAttribute("This constructor might be removed in 12.0. For unit testing, consider using DragDrop.DoDragDrop or IHeadlessWindow.DragDrop.")>]
new : 
        routedEvent : RoutedEvent<DragEventArgs> * 
        data : IDataObject * 
        target : Interactive * 
        targetLocation : Point * 
        keyModifiers : KeyModifiers -> DragEventArgs
```



#### Parameters
<dl><dt>  <a href="T_Avalonia_Interactivity_RoutedEvent_1">RoutedEvent</a>(<a href="T_Avalonia_Input_DragEventArgs">DragEventArgs</a>)</dt><dd> </dd><dt>  <a href="T_Avalonia_Input_IDataObject">IDataObject</a></dt><dd> </dd><dt>  <a href="T_Avalonia_Interactivity_Interactive">Interactive</a></dt><dd> </dd><dt>  <a href="T_Avalonia_Point">Point</a></dt><dd> </dd><dt>  <a href="T_Avalonia_Input_KeyModifiers">KeyModifiers</a></dt><dd> </dd></dl>

## See Also


#### Reference
<a href="T_Avalonia_Input_DragEventArgs">DragEventArgs Class</a>  
<a href="N_Avalonia_Input">Avalonia.Input Namespace</a>  
