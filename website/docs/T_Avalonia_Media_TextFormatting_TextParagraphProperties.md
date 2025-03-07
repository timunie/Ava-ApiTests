# TextParagraphProperties Class


Provides a set of properties that are used during the paragraph layout.



## Definition
**Namespace:** <a href="N_Avalonia_Media_TextFormatting">Avalonia.Media.TextFormatting</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public abstract class TextParagraphProperties
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public MustInherit Class TextParagraphProperties
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
[<AbstractClassAttribute>]
type TextParagraphProperties = class end
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Media/TextFormatting/TextParagraphProperties.cs" title="View the source code">View Source</a>

<table>
<tr><td><strong>Inheritance</strong></td><td><a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>  →  TextParagraphProperties</td></tr>
<tr><td><strong>Derived</strong></td><td><a href="T_Avalonia_Media_TextFormatting_GenericTextParagraphProperties">Avalonia.Media.TextFormatting.GenericTextParagraphProperties</a></td></tr>
</table>



## Constructors
<table>
<tr>
<td><a href="M_Avalonia_Media_TextFormatting_TextParagraphProperties__ctor">TextParagraphProperties()</a></td>
<td>Initializes a new instance of the TextParagraphProperties class</td>
</tr>
</table>

## Properties
<table>
<tr>
<td><a href="P_Avalonia_Media_TextFormatting_TextParagraphProperties_AlwaysCollapsible">AlwaysCollapsible</a></td>
<td>If true, the formatted line may always be collapsed. If false (the default), only lines that overflow the paragraph width are collapsed.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Media_TextFormatting_TextParagraphProperties_DefaultIncrementalTab">DefaultIncrementalTab</a></td>
<td>Gets the default incremental tab width.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Media_TextFormatting_TextParagraphProperties_DefaultTextRunProperties">DefaultTextRunProperties</a></td>
<td>Gets the default text style.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Media_TextFormatting_TextParagraphProperties_FirstLineInParagraph">FirstLineInParagraph</a></td>
<td>Indicates the first line of the paragraph.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Media_TextFormatting_TextParagraphProperties_FlowDirection">FlowDirection</a></td>
<td>This property specifies whether the primary text advance direction shall be left-to-right, right-to-left.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Media_TextFormatting_TextParagraphProperties_Indent">Indent</a></td>
<td>Line indentation</td>
</tr>
<tr>
<td><a href="P_Avalonia_Media_TextFormatting_TextParagraphProperties_LetterSpacing">LetterSpacing</a></td>
<td>Gets the letter spacing.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Media_TextFormatting_TextParagraphProperties_LineHeight">LineHeight</a></td>
<td>Paragraph's line height</td>
</tr>
<tr>
<td><a href="P_Avalonia_Media_TextFormatting_TextParagraphProperties_ParagraphIndent">ParagraphIndent</a></td>
<td>Get the paragraph indentation.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Media_TextFormatting_TextParagraphProperties_TextAlignment">TextAlignment</a></td>
<td>Gets the text alignment.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Media_TextFormatting_TextParagraphProperties_TextDecorations">TextDecorations</a></td>
<td>If not null, text decorations to apply to all runs in the line. This is in addition to any text decorations specified by the TextRunProperties for individual text runs.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Media_TextFormatting_TextParagraphProperties_TextWrapping">TextWrapping</a></td>
<td>Gets the text wrapping.</td>
</tr>
</table>

## Methods
<table>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object)" target="_blank" rel="noopener noreferrer">Equals(Object)</a></td>
<td>Determines whether the specified object is equal to the current object.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.finalize" target="_blank" rel="noopener noreferrer">Finalize()</a></td>
<td>Allows an object to try to free resources and perform other cleanup operations before it is reclaimed by garbage collection.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
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
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone" target="_blank" rel="noopener noreferrer">MemberwiseClone()</a></td>
<td>Creates a shallow copy of the current <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.tostring" target="_blank" rel="noopener noreferrer">ToString()</a></td>
<td>Returns a string that represents the current object.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
</table>

## See Also


#### Reference
<a href="N_Avalonia_Media_TextFormatting">Avalonia.Media.TextFormatting Namespace</a>  
