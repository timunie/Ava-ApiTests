# TextLeadingPrefixCharacterEllipsis Class


Ellipsis based on a fixed length leading prefix and suffix growing from the end at character granularity.



## Definition
**Namespace:** <a href="N_Avalonia_Media_TextFormatting">Avalonia.Media.TextFormatting</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public sealed class TextLeadingPrefixCharacterEllipsis : TextCollapsingProperties
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public NotInheritable Class TextLeadingPrefixCharacterEllipsis
	Inherits TextCollapsingProperties
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
[<SealedAttribute>]
type TextLeadingPrefixCharacterEllipsis = 
    class
        inherit TextCollapsingProperties
    end
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Media/TextFormatting/TextLeadingPrefixCharacterEllipsis.cs" title="View the source code">View Source</a>

<table>
<tr><td><strong>Inheritance</strong></td><td><a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>  →  <a href="T_Avalonia_Media_TextFormatting_TextCollapsingProperties">TextCollapsingProperties</a>  →  TextLeadingPrefixCharacterEllipsis</td></tr>
</table>



## Constructors
<table>
<tr>
<td><a href="M_Avalonia_Media_TextFormatting_TextLeadingPrefixCharacterEllipsis__ctor">TextLeadingPrefixCharacterEllipsis(String, Int32, Double, TextRunProperties, FlowDirection)</a></td>
<td>Construct a text trailing word ellipsis collapsing properties.</td>
</tr>
</table>

## Properties
<table>
<tr>
<td><a href="P_Avalonia_Media_TextFormatting_TextLeadingPrefixCharacterEllipsis_FlowDirection">FlowDirection</a></td>
<td><br />(Overrides <a href="P_Avalonia_Media_TextFormatting_TextCollapsingProperties_FlowDirection">TextCollapsingProperties.FlowDirection</a>)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Media_TextFormatting_TextLeadingPrefixCharacterEllipsis_Symbol">Symbol</a></td>
<td>Gets the text run that is used as collapsing symbol.<br />(Overrides <a href="P_Avalonia_Media_TextFormatting_TextCollapsingProperties_Symbol">TextCollapsingProperties.Symbol</a>)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Media_TextFormatting_TextLeadingPrefixCharacterEllipsis_Width">Width</a></td>
<td>Gets the width in which the collapsible range is constrained to.<br />(Overrides <a href="P_Avalonia_Media_TextFormatting_TextCollapsingProperties_Width">TextCollapsingProperties.Width</a>)</td>
</tr>
</table>

## Methods
<table>
<tr>
<td><a href="M_Avalonia_Media_TextFormatting_TextLeadingPrefixCharacterEllipsis_Collapse">Collapse(TextLine)</a></td>
<td>Collapses given text line.<br />(Overrides <a href="M_Avalonia_Media_TextFormatting_TextCollapsingProperties_Collapse">TextCollapsingProperties.Collapse(TextLine)</a>)</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object)" target="_blank" rel="noopener noreferrer">Equals(Object)</a></td>
<td>Determines whether the specified object is equal to the current object.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.gethashcode" target="_blank" rel="noopener noreferrer">GetHashCode()</a></td>
<td>Serves as the default hash function.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.gettype" target="_blank" rel="noopener noreferrer">GetType()</a></td>
<td>Gets the <a href="https://learn.microsoft.com/dotnet/api/system.type" target="_blank" rel="noopener noreferrer">Type</a> of the current instance.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.tostring" target="_blank" rel="noopener noreferrer">ToString()</a></td>
<td>Returns a string that represents the current object.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
</table>

## See Also


#### Reference
<a href="N_Avalonia_Media_TextFormatting">Avalonia.Media.TextFormatting Namespace</a>  

