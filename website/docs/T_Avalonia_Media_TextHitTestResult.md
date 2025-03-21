# TextHitTestResult Structure


Holds a hit test result from a <a href="T_Avalonia_Media_TextFormatting_TextLayout">TextLayout</a>.



## Definition
**Namespace:** <a href="N_Avalonia_Media">Avalonia.Media</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public readonly struct TextHitTestResult : IEquatable<TextHitTestResult>
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Structure TextHitTestResult
	Implements IEquatable(Of TextHitTestResult)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
[<SealedAttribute>]
type TextHitTestResult = 
    struct
        inherit ValueType
        interface IEquatable<TextHitTestResult>
    end
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Media/TextHitTestResult.cs" title="View the source code">View Source</a>

<table>
<tr><td><strong>Inheritance</strong></td><td><a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>  →  <a href="https://learn.microsoft.com/dotnet/api/system.valuetype" target="_blank" rel="noopener noreferrer">ValueType</a>  →  TextHitTestResult</td></tr>
<tr><td><strong>Implements</strong></td><td><a href="https://learn.microsoft.com/dotnet/api/system.iequatable-1" target="_blank" rel="noopener noreferrer">IEquatable</a>(TextHitTestResult)</td></tr>
</table>



## Constructors
<table>
<tr>
<td><a href="M_Avalonia_Media_TextHitTestResult__ctor">TextHitTestResult(CharacterHit, Int32, Boolean, Boolean)</a></td>
<td>Initializes a new instance of the TextHitTestResult class</td>
</tr>
</table>

## Properties
<table>
<tr>
<td><a href="P_Avalonia_Media_TextHitTestResult_CharacterHit">CharacterHit</a></td>
<td>Gets the character hit of the hit test result.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Media_TextHitTestResult_IsInside">IsInside</a></td>
<td>Gets a value indicating whether the point is inside the bounds of the text.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Media_TextHitTestResult_IsTrailing">IsTrailing</a></td>
<td>Gets a value indicating whether the hit is on the trailing edge of the character.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Media_TextHitTestResult_TextPosition">TextPosition</a></td>
<td>Gets the index of the hit character in the text.</td>
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
<a href="N_Avalonia_Media">Avalonia.Media Namespace</a>  

