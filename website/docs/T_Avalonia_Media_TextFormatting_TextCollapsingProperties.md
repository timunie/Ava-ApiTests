# TextCollapsingProperties Class


Properties of text collapsing.



## Definition
**Namespace:** <a href="N_Avalonia_Media_TextFormatting">Avalonia.Media.TextFormatting</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public abstract class TextCollapsingProperties
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public MustInherit Class TextCollapsingProperties
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
[<AbstractClassAttribute>]
type TextCollapsingProperties = class end
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Media/TextFormatting/TextCollapsingProperties.cs" title="View the source code">View Source</a>

<table>
<tr><td><strong>Inheritance</strong></td><td><a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>  →  TextCollapsingProperties</td></tr>
<tr><td><strong>Derived</strong></td><td><a href="T_Avalonia_Media_TextFormatting_TextLeadingPrefixCharacterEllipsis">Avalonia.Media.TextFormatting.TextLeadingPrefixCharacterEllipsis</a><br /><a href="T_Avalonia_Media_TextFormatting_TextTrailingCharacterEllipsis">Avalonia.Media.TextFormatting.TextTrailingCharacterEllipsis</a><br /><a href="T_Avalonia_Media_TextFormatting_TextTrailingWordEllipsis">Avalonia.Media.TextFormatting.TextTrailingWordEllipsis</a></td></tr>
</table>



## Constructors
<table>
<tr>
<td><a href="M_Avalonia_Media_TextFormatting_TextCollapsingProperties__ctor">TextCollapsingProperties()</a></td>
<td>Initializes a new instance of the TextCollapsingProperties class</td>
</tr>
</table>

## Properties
<table>
<tr>
<td><a href="P_Avalonia_Media_TextFormatting_TextCollapsingProperties_FlowDirection">FlowDirection</a></td>
<td>Gets the flow direction that is used for collapsing.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Media_TextFormatting_TextCollapsingProperties_Symbol">Symbol</a></td>
<td>Gets the text run that is used as collapsing symbol.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Media_TextFormatting_TextCollapsingProperties_Width">Width</a></td>
<td>Gets the width in which the collapsible range is constrained to.</td>
</tr>
</table>

## Methods
<table>
<tr>
<td><a href="M_Avalonia_Media_TextFormatting_TextCollapsingProperties_Collapse">Collapse(TextLine)</a></td>
<td>Collapses given text line.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Media_TextFormatting_TextCollapsingProperties_CreateCollapsedRuns">CreateCollapsedRuns(TextLine, Int32, FlowDirection, TextRun)</a></td>
<td>Creates a list of runs for given collapsed length which includes specified symbol at the end.</td>
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
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.tostring" target="_blank" rel="noopener noreferrer">ToString()</a></td>
<td>Returns a string that represents the current object.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
</table>

## See Also


#### Reference
<a href="N_Avalonia_Media_TextFormatting">Avalonia.Media.TextFormatting Namespace</a>  
