---
title:GetRegularSnapPoints Method
description: Autogenertated API Reference page
hide_table_of_contents: false
---
# GetRegularSnapPoints Method




## Definition
**Namespace:** <a href="N_Avalonia_Controls">Avalonia.Controls</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.4

**C#**
``` C#
public double GetRegularSnapPoints(
	Orientation orientation,
	SnapPointsAlignment snapPointsAlignment,
	out double offset
)
```
**VB**
``` VB
Public Function GetRegularSnapPoints ( 
	orientation As Orientation,
	snapPointsAlignment As SnapPointsAlignment,
	<OutAttribute> ByRef offset As Double
) As Double
```
**F#**
``` F#
abstract GetRegularSnapPoints : 
        orientation : Orientation * 
        snapPointsAlignment : SnapPointsAlignment * 
        offset : float byref -> float 
override GetRegularSnapPoints : 
        orientation : Orientation * 
        snapPointsAlignment : SnapPointsAlignment * 
        offset : float byref -> float 
```



#### Parameters
<dl><dt>  <a href="T_Avalonia_Layout_Orientation">Orientation</a></dt><dd> </dd><dt>  <a href="T_Avalonia_Controls_Primitives_SnapPointsAlignment">SnapPointsAlignment</a></dt><dd> </dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.double" target="_blank" rel="noopener noreferrer">Double</a></dt><dd> </dd></dl>

#### Return Value
<a href="https://learn.microsoft.com/dotnet/api/system.double" target="_blank" rel="noopener noreferrer">Double</a>

#### Implements
<a href="M_Avalonia_Controls_Primitives_IScrollSnapPointsInfo_GetRegularSnapPoints">IScrollSnapPointsInfo.GetRegularSnapPoints(Orientation, SnapPointsAlignment, Double)</a>  


## See Also


#### Reference
<a href="T_Avalonia_Controls_VirtualizingStackPanel">VirtualizingStackPanel Class</a>  
<a href="N_Avalonia_Controls">Avalonia.Controls Namespace</a>  
