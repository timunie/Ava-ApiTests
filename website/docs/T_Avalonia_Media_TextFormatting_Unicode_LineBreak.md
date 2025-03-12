# LineBreak Structure


Information about a potential line break position



## Definition
**Namespace:** <a href="N_Avalonia_Media_TextFormatting_Unicode">Avalonia.Media.TextFormatting.Unicode</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public readonly struct LineBreak : IEquatable<LineBreak>
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Structure LineBreak
	Implements IEquatable(Of LineBreak)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
[<SealedAttribute>]
type LineBreak = 
    struct
        inherit ValueType
        interface IEquatable<LineBreak>
    end
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Media/TextFormatting/Unicode/LineBreak.cs" title="View the source code">View Source</a>

<table>
<tr><td><strong>Inheritance</strong></td><td><a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>  →  <a href="https://learn.microsoft.com/dotnet/api/system.valuetype" target="_blank" rel="noopener noreferrer">ValueType</a>  →  LineBreak</td></tr>
<tr><td><strong>Implements</strong></td><td><a href="https://learn.microsoft.com/dotnet/api/system.iequatable-1" target="_blank" rel="noopener noreferrer">IEquatable</a>(LineBreak)</td></tr>
</table>



## Constructors
<table>
<tr>
<td><a href="M_Avalonia_Media_TextFormatting_Unicode_LineBreak__ctor">LineBreak(Int32, Int32, Boolean)</a></td>
<td>Constructor</td>
</tr>
</table>

## Properties
<table>
<tr>
<td><a href="P_Avalonia_Media_TextFormatting_Unicode_LineBreak_PositionMeasure">PositionMeasure</a></td>
<td>The break position, before any trailing whitespace</td>
</tr>
<tr>
<td><a href="P_Avalonia_Media_TextFormatting_Unicode_LineBreak_PositionWrap">PositionWrap</a></td>
<td>The break position, after any trailing whitespace</td>
</tr>
<tr>
<td><a href="P_Avalonia_Media_TextFormatting_Unicode_LineBreak_Required">Required</a></td>
<td>True if there should be a forced line break here</td>
</tr>
</table>

## Methods
<table>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.gettype" target="_blank" rel="noopener noreferrer">GetType()</a></td>
<td>Gets the <a href="https://learn.microsoft.com/dotnet/api/system.type" target="_blank" rel="noopener noreferrer">Type</a> of the current instance.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
</table>

## See Also


#### Reference
<a href="N_Avalonia_Media_TextFormatting_Unicode">Avalonia.Media.TextFormatting.Unicode Namespace</a>  

