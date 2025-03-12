# ElementComposition Class


Enables access to composition visual objects that back XAML elements in the XAML composition tree.



## Definition
**Namespace:** <a href="N_Avalonia_Rendering_Composition">Avalonia.Rendering.Composition</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public static class ElementComposition
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public NotInheritable Class ElementComposition
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
[<AbstractClassAttribute>]
[<SealedAttribute>]
type ElementComposition = class end
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Rendering/Composition/ElementCompositionPreview.cs" title="View the source code">View Source</a>

<table>
<tr><td><strong>Inheritance</strong></td><td><a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>  →  ElementComposition</td></tr>
</table>



## Methods
<table>
<tr>
<td><a href="M_Avalonia_Rendering_Composition_ElementComposition_GetElementChildVisual">GetElementChildVisual(Visual)</a></td>
<td>Retrieves a <a href="T_Avalonia_Rendering_Composition_CompositionVisual">CompositionVisual</a> object previously set by a call to <a href="M_Avalonia_Rendering_Composition_ElementComposition_SetElementChildVisual">SetElementChildVisual(Visual, CompositionVisual)</a>.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Rendering_Composition_ElementComposition_GetElementVisual">GetElementVisual(Visual)</a></td>
<td>Gets CompositionVisual that backs a Visual</td>
</tr>
<tr>
<td><a href="M_Avalonia_Rendering_Composition_ElementComposition_SetElementChildVisual">SetElementChildVisual(Visual, CompositionVisual)</a></td>
<td>Sets a custom <a href="T_Avalonia_Rendering_Composition_CompositionVisual">CompositionVisual</a> as the last child of the element’s visual tree.</td>
</tr>
</table>

## See Also


#### Reference
<a href="N_Avalonia_Rendering_Composition">Avalonia.Rendering.Composition Namespace</a>  

