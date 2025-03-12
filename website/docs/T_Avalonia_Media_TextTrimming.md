# TextTrimming Class


Describes how text is trimmed when it overflows.



## Definition
**Namespace:** <a href="N_Avalonia_Media">Avalonia.Media</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public abstract class TextTrimming
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public MustInherit Class TextTrimming
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
[<AbstractClassAttribute>]
type TextTrimming = class end
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Media/TextTrimming.cs" title="View the source code">View Source</a>

<table>
<tr><td><strong>Inheritance</strong></td><td><a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>  →  TextTrimming</td></tr>
<tr><td><strong>Derived</strong></td><td><a href="T_Avalonia_Media_TextLeadingPrefixTrimming">Avalonia.Media.TextLeadingPrefixTrimming</a><br /><a href="T_Avalonia_Media_TextTrailingTrimming">Avalonia.Media.TextTrailingTrimming</a></td></tr>
</table>



## Constructors
<table>
<tr>
<td><a href="M_Avalonia_Media_TextTrimming__ctor">TextTrimming()</a></td>
<td>Initializes a new instance of the TextTrimming class</td>
</tr>
</table>

## Properties
<table>
<tr>
<td><a href="P_Avalonia_Media_TextTrimming_CharacterEllipsis">CharacterEllipsis</a></td>
<td>Text is trimmed at a character boundary. An ellipsis (...) is drawn in place of remaining text.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Media_TextTrimming_LeadingCharacterEllipsis">LeadingCharacterEllipsis</a></td>
<td>Text is trimmed at a character boundary starting from the beginning. An ellipsis (...) is drawn in place of remaining text.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Media_TextTrimming_None">None</a></td>
<td>Text is not trimmed.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Media_TextTrimming_PrefixCharacterEllipsis">PrefixCharacterEllipsis</a></td>
<td>Text is trimmed after a given prefix length. An ellipsis (...) is drawn in between prefix and suffix and represents remaining text.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Media_TextTrimming_WordEllipsis">WordEllipsis</a></td>
<td>Text is trimmed at a word boundary. An ellipsis (...) is drawn in place of remaining text.</td>
</tr>
</table>

## Methods
<table>
<tr>
<td><a href="M_Avalonia_Media_TextTrimming_CreateCollapsingProperties">CreateCollapsingProperties(TextCollapsingCreateInfo)</a></td>
<td>Creates properties that will be used for collapsing lines of text.</td>
</tr>
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
<td><a href="M_Avalonia_Media_TextTrimming_Parse">Parse(String)</a></td>
<td>Parses a text trimming string. Names must match static properties defined in this class.</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.tostring" target="_blank" rel="noopener noreferrer">ToString()</a></td>
<td>Returns a string that represents the current object.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
</table>

## See Also


#### Reference
<a href="N_Avalonia_Media">Avalonia.Media Namespace</a>  

