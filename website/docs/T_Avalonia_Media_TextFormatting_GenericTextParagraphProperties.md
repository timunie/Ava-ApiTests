# GenericTextParagraphProperties Class


Generic implementation of TextParagraphProperties



## Definition
**Namespace:** <a href="N_Avalonia_Media_TextFormatting">Avalonia.Media.TextFormatting</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public sealed class GenericTextParagraphProperties : TextParagraphProperties
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public NotInheritable Class GenericTextParagraphProperties
	Inherits TextParagraphProperties
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
[<SealedAttribute>]
type GenericTextParagraphProperties = 
    class
        inherit TextParagraphProperties
    end
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Media/TextFormatting/GenericTextParagraphProperties.cs" title="View the source code">View Source</a>

<table>
<tr><td><strong>Inheritance</strong></td><td><a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>  →  <a href="T_Avalonia_Media_TextFormatting_TextParagraphProperties">TextParagraphProperties</a>  →  GenericTextParagraphProperties</td></tr>
</table>



## Constructors
<table>
<tr>
<td><a href="M_Avalonia_Media_TextFormatting_GenericTextParagraphProperties__ctor_1">GenericTextParagraphProperties(TextParagraphProperties)</a></td>
<td>Constructing TextParagraphProperties from another one</td>
</tr>
<tr>
<td><a href="M_Avalonia_Media_TextFormatting_GenericTextParagraphProperties__ctor_2">GenericTextParagraphProperties(TextRunProperties, TextAlignment, TextWrapping, Double, Double)</a></td>
<td>Constructing TextParagraphProperties</td>
</tr>
<tr>
<td><a href="M_Avalonia_Media_TextFormatting_GenericTextParagraphProperties__ctor">GenericTextParagraphProperties(FlowDirection, TextAlignment, Boolean, Boolean, TextRunProperties, TextWrapping, Double, Double, Double)</a></td>
<td>Constructing TextParagraphProperties</td>
</tr>
</table>

## Properties
<table>
<tr>
<td><a href="P_Avalonia_Media_TextFormatting_GenericTextParagraphProperties_AlwaysCollapsible">AlwaysCollapsible</a></td>
<td>If true, the formatted line may always be collapsed. If false (the default), only lines that overflow the paragraph width are collapsed.<br />(Overrides <a href="P_Avalonia_Media_TextFormatting_TextParagraphProperties_AlwaysCollapsible">TextParagraphProperties.AlwaysCollapsible</a>)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Media_TextFormatting_TextParagraphProperties_DefaultIncrementalTab">DefaultIncrementalTab</a></td>
<td>Gets the default incremental tab width.<br />(Inherited from <a href="T_Avalonia_Media_TextFormatting_TextParagraphProperties">TextParagraphProperties</a>)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Media_TextFormatting_GenericTextParagraphProperties_DefaultTextRunProperties">DefaultTextRunProperties</a></td>
<td>Paragraph's default run properties<br />(Overrides <a href="P_Avalonia_Media_TextFormatting_TextParagraphProperties_DefaultTextRunProperties">TextParagraphProperties.DefaultTextRunProperties</a>)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Media_TextFormatting_GenericTextParagraphProperties_FirstLineInParagraph">FirstLineInParagraph</a></td>
<td>Indicates the first line of the paragraph.<br />(Overrides <a href="P_Avalonia_Media_TextFormatting_TextParagraphProperties_FirstLineInParagraph">TextParagraphProperties.FirstLineInParagraph</a>)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Media_TextFormatting_GenericTextParagraphProperties_FlowDirection">FlowDirection</a></td>
<td>This property specifies whether the primary text advance direction shall be left-to-right, right-to-left, or top-to-bottom.<br />(Overrides <a href="P_Avalonia_Media_TextFormatting_TextParagraphProperties_FlowDirection">TextParagraphProperties.FlowDirection</a>)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Media_TextFormatting_GenericTextParagraphProperties_Indent">Indent</a></td>
<td>Line indentation<br />(Overrides <a href="P_Avalonia_Media_TextFormatting_TextParagraphProperties_Indent">TextParagraphProperties.Indent</a>)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Media_TextFormatting_GenericTextParagraphProperties_LetterSpacing">LetterSpacing</a></td>
<td>The letter spacing<br />(Overrides <a href="P_Avalonia_Media_TextFormatting_TextParagraphProperties_LetterSpacing">TextParagraphProperties.LetterSpacing</a>)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Media_TextFormatting_GenericTextParagraphProperties_LineHeight">LineHeight</a></td>
<td>Paragraph's line height<br />(Overrides <a href="P_Avalonia_Media_TextFormatting_TextParagraphProperties_LineHeight">TextParagraphProperties.LineHeight</a>)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Media_TextFormatting_TextParagraphProperties_ParagraphIndent">ParagraphIndent</a></td>
<td>Get the paragraph indentation.<br />(Inherited from <a href="T_Avalonia_Media_TextFormatting_TextParagraphProperties">TextParagraphProperties</a>)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Media_TextFormatting_GenericTextParagraphProperties_TextAlignment">TextAlignment</a></td>
<td>This property describes how inline content of a block is aligned.<br />(Overrides <a href="P_Avalonia_Media_TextFormatting_TextParagraphProperties_TextAlignment">TextParagraphProperties.TextAlignment</a>)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Media_TextFormatting_TextParagraphProperties_TextDecorations">TextDecorations</a></td>
<td>If not null, text decorations to apply to all runs in the line. This is in addition to any text decorations specified by the TextRunProperties for individual text runs.<br />(Inherited from <a href="T_Avalonia_Media_TextFormatting_TextParagraphProperties">TextParagraphProperties</a>)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Media_TextFormatting_GenericTextParagraphProperties_TextWrapping">TextWrapping</a></td>
<td>This property controls whether or not text wraps when it reaches the flow edge of its containing block box<br />(Overrides <a href="P_Avalonia_Media_TextFormatting_TextParagraphProperties_TextWrapping">TextParagraphProperties.TextWrapping</a>)</td>
</tr>
</table>

## Methods
<table>
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

