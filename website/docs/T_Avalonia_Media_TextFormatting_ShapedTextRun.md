# ShapedTextRun Class


A text run that holds shaped characters.



## Definition
**Namespace:** <a href="N_Avalonia_Media_TextFormatting">Avalonia.Media.TextFormatting</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public sealed class ShapedTextRun : DrawableTextRun, 
	IDisposable
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public NotInheritable Class ShapedTextRun
	Inherits DrawableTextRun
	Implements IDisposable
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
[<SealedAttribute>]
type ShapedTextRun = 
    class
        inherit DrawableTextRun
        interface IDisposable
    end
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Media/TextFormatting/ShapedTextRun.cs" title="View the source code">View Source</a>

<table>
<tr><td><strong>Inheritance</strong></td><td><a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>  →  <a href="T_Avalonia_Media_TextFormatting_TextRun">TextRun</a>  →  <a href="T_Avalonia_Media_TextFormatting_DrawableTextRun">DrawableTextRun</a>  →  ShapedTextRun</td></tr>
<tr><td><strong>Implements</strong></td><td><a href="https://learn.microsoft.com/dotnet/api/system.idisposable" target="_blank" rel="noopener noreferrer">IDisposable</a></td></tr>
</table>



## Constructors
<table>
<tr>
<td><a href="M_Avalonia_Media_TextFormatting_ShapedTextRun__ctor">ShapedTextRun(ShapedBuffer, TextRunProperties)</a></td>
<td>Initializes a new instance of the ShapedTextRun class</td>
</tr>
</table>

## Properties
<table>
<tr>
<td><a href="P_Avalonia_Media_TextFormatting_ShapedTextRun_Baseline">Baseline</a></td>
<td><br />(Overrides <a href="P_Avalonia_Media_TextFormatting_DrawableTextRun_Baseline">DrawableTextRun.Baseline</a>)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Media_TextFormatting_ShapedTextRun_BidiLevel">BidiLevel</a></td>
<td> </td>
</tr>
<tr>
<td><a href="P_Avalonia_Media_TextFormatting_ShapedTextRun_GlyphRun">GlyphRun</a></td>
<td> </td>
</tr>
<tr>
<td><a href="P_Avalonia_Media_TextFormatting_ShapedTextRun_IsReversed">IsReversed</a></td>
<td> </td>
</tr>
<tr>
<td><a href="P_Avalonia_Media_TextFormatting_ShapedTextRun_Length">Length</a></td>
<td>Gets the text source length.<br />(Overrides <a href="P_Avalonia_Media_TextFormatting_TextRun_Length">TextRun.Length</a>)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Media_TextFormatting_ShapedTextRun_Properties">Properties</a></td>
<td>A set of properties shared by every characters in the run<br />(Overrides <a href="P_Avalonia_Media_TextFormatting_TextRun_Properties">TextRun.Properties</a>)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Media_TextFormatting_ShapedTextRun_ShapedBuffer">ShapedBuffer</a></td>
<td> </td>
</tr>
<tr>
<td><a href="P_Avalonia_Media_TextFormatting_ShapedTextRun_Size">Size</a></td>
<td><br />(Overrides <a href="P_Avalonia_Media_TextFormatting_DrawableTextRun_Size">DrawableTextRun.Size</a>)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Media_TextFormatting_ShapedTextRun_Text">Text</a></td>
<td>Gets the text run's text.<br />(Overrides <a href="P_Avalonia_Media_TextFormatting_TextRun_Text">TextRun.Text</a>)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Media_TextFormatting_ShapedTextRun_TextMetrics">TextMetrics</a></td>
<td> </td>
</tr>
</table>

## Methods
<table>
<tr>
<td><a href="M_Avalonia_Media_TextFormatting_ShapedTextRun_Dispose">Dispose()</a></td>
<td>Releases all resources used by the ShapedTextRun</td>
</tr>
<tr>
<td><a href="M_Avalonia_Media_TextFormatting_ShapedTextRun_Draw">Draw(DrawingContext, Point)</a></td>
<td>Draws the <a href="T_Avalonia_Media_TextFormatting_DrawableTextRun">DrawableTextRun</a> at the given origin.<br />(Overrides <a href="M_Avalonia_Media_TextFormatting_DrawableTextRun_Draw">DrawableTextRun.Draw(DrawingContext, Point)</a>)</td>
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
<tr>
<td><a href="M_Avalonia_Media_TextFormatting_ShapedTextRun_TryMeasureCharacters">TryMeasureCharacters(Double, Int32)</a></td>
<td>Measures the number of characters that fit into available width.</td>
</tr>
</table>

## See Also


#### Reference
<a href="N_Avalonia_Media_TextFormatting">Avalonia.Media.TextFormatting Namespace</a>  

