# LayoutHelper Class


Provides helper methods needed for layout.



## Definition
**Namespace:** <a href="N_Avalonia_Layout">Avalonia.Layout</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public static class LayoutHelper
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public NotInheritable Class LayoutHelper
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
[<AbstractClassAttribute>]
[<SealedAttribute>]
type LayoutHelper = class end
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Layout/LayoutHelper.cs" title="View the source code">View Source</a>

<table>
<tr><td><strong>Inheritance</strong></td><td><a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>  →  LayoutHelper</td></tr>
</table>



## Properties
<table>
<tr>
<td><a href="P_Avalonia_Layout_LayoutHelper_LayoutEpsilon">LayoutEpsilon</a></td>
<td>Epsilon value used for certain layout calculations. Based on the value in WPF LayoutDoubleUtil.</td>
</tr>
</table>

## Methods
<table>
<tr>
<td><a href="M_Avalonia_Layout_LayoutHelper_ApplyLayoutConstraints">ApplyLayoutConstraints(Layoutable, Size)</a></td>
<td>Calculates a control's size based on its <a href="P_Avalonia_Layout_Layoutable_Width">Width</a>, <a href="P_Avalonia_Layout_Layoutable_Height">Height</a>, <a href="P_Avalonia_Layout_Layoutable_MinWidth">MinWidth</a>, <a href="P_Avalonia_Layout_Layoutable_MaxWidth">MaxWidth</a>, <a href="P_Avalonia_Layout_Layoutable_MinHeight">MinHeight</a> and <a href="P_Avalonia_Layout_Layoutable_MaxHeight">MaxHeight</a>.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Layout_LayoutHelper_ArrangeChild_1">ArrangeChild(Layoutable, Size, Thickness)</a></td>
<td> </td>
</tr>
<tr>
<td><a href="M_Avalonia_Layout_LayoutHelper_ArrangeChild">ArrangeChild(Layoutable, Size, Thickness, Thickness)</a></td>
<td> </td>
</tr>
<tr>
<td><a href="M_Avalonia_Layout_LayoutHelper_GetLayoutScale">GetLayoutScale(Layoutable)</a></td>
<td>Obtains layout scale of the given control.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Layout_LayoutHelper_InvalidateSelfAndChildrenMeasure">InvalidateSelfAndChildrenMeasure(Layoutable)</a></td>
<td>Invalidates measure for given control and all visual children recursively.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Layout_LayoutHelper_MeasureChild_1">MeasureChild(Layoutable, Size, Thickness)</a></td>
<td> </td>
</tr>
<tr>
<td><a href="M_Avalonia_Layout_LayoutHelper_MeasureChild">MeasureChild(Layoutable, Size, Thickness, Thickness)</a></td>
<td> </td>
</tr>
<tr>
<td><a href="M_Avalonia_Layout_LayoutHelper_RoundLayoutSizeUp">RoundLayoutSizeUp(Size, Double, Double)</a></td>
<td>Rounds a size to integer values for layout purposes, compensating for high DPI screen coordinates by rounding the size up to the nearest pixel.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Layout_LayoutHelper_RoundLayoutThickness">RoundLayoutThickness(Thickness, Double, Double)</a></td>
<td>Rounds a thickness to integer values for layout purposes, compensating for high DPI screen coordinates.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Layout_LayoutHelper_RoundLayoutValue">RoundLayoutValue(Double, Double)</a></td>
<td>Calculates the value to be used for layout rounding at high DPI by rounding the value up or down to the nearest pixel.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Layout_LayoutHelper_RoundLayoutValueUp">RoundLayoutValueUp(Double, Double)</a></td>
<td>Calculates the value to be used for layout rounding at high DPI by rounding the value up to the nearest pixel.</td>
</tr>
</table>

## See Also


#### Reference
<a href="N_Avalonia_Layout">Avalonia.Layout Namespace</a>  

