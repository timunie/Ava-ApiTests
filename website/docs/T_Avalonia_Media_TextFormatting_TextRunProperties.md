# TextRunProperties Class


Provides a set of properties, such as typeface or foreground brush, that can be applied to a TextRun object. This is an abstract class.



## Definition
**Namespace:** <a href="N_Avalonia_Media_TextFormatting">Avalonia.Media.TextFormatting</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public abstract class TextRunProperties : IEquatable<TextRunProperties>
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public MustInherit Class TextRunProperties
	Implements IEquatable(Of TextRunProperties)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
[<AbstractClassAttribute>]
type TextRunProperties = 
    class
        interface IEquatable<TextRunProperties>
    end
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Media/TextFormatting/TextRunProperties.cs" title="View the source code">View Source</a>

<table>
<tr><td><strong>Inheritance</strong></td><td><a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>  →  TextRunProperties</td></tr>
<tr><td><strong>Derived</strong></td><td><a href="T_Avalonia_Media_TextFormatting_GenericTextRunProperties">Avalonia.Media.TextFormatting.GenericTextRunProperties</a></td></tr>
<tr><td><strong>Implements</strong></td><td><a href="https://learn.microsoft.com/dotnet/api/system.iequatable-1" target="_blank" rel="noopener noreferrer">IEquatable</a>(TextRunProperties)</td></tr>
</table>

The text layout client provides a concrete implementation of this abstract class. This enables the client to implement text run properties in a way that corresponds with the associated formatting store.

## Constructors
<table>
<tr>
<td><a href="M_Avalonia_Media_TextFormatting_TextRunProperties__ctor">TextRunProperties()</a></td>
<td>Initializes a new instance of the TextRunProperties class</td>
</tr>
</table>

## Properties
<table>
<tr>
<td><a href="P_Avalonia_Media_TextFormatting_TextRunProperties_BackgroundBrush">BackgroundBrush</a></td>
<td>Brush used to paint background of run.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Media_TextFormatting_TextRunProperties_BaselineAlignment">BaselineAlignment</a></td>
<td>Run vertical box alignment</td>
</tr>
<tr>
<td><a href="P_Avalonia_Media_TextFormatting_TextRunProperties_CultureInfo">CultureInfo</a></td>
<td>Run text culture.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Media_TextFormatting_TextRunProperties_FontFeatures">FontFeatures</a></td>
<td>Optional features of used font.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Media_TextFormatting_TextRunProperties_FontRenderingEmSize">FontRenderingEmSize</a></td>
<td>Em size of font used to format and display text</td>
</tr>
<tr>
<td><a href="P_Avalonia_Media_TextFormatting_TextRunProperties_ForegroundBrush">ForegroundBrush</a></td>
<td>Brush used to fill text.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Media_TextFormatting_TextRunProperties_TextDecorations">TextDecorations</a></td>
<td>Run TextDecorations.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Media_TextFormatting_TextRunProperties_Typeface">Typeface</a></td>
<td>Run typeface</td>
</tr>
</table>

## Methods
<table>
<tr>
<td><a href="M_Avalonia_Media_TextFormatting_TextRunProperties_Equals_1">Equals(Object)</a></td>
<td><br />(Overrides <a href="https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object)" target="_blank" rel="noopener noreferrer">Object.Equals(Object)</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Media_TextFormatting_TextRunProperties_Equals">Equals(TextRunProperties)</a></td>
<td> </td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.finalize" target="_blank" rel="noopener noreferrer">Finalize()</a></td>
<td>Allows an object to try to free resources and perform other cleanup operations before it is reclaimed by garbage collection.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Media_TextFormatting_TextRunProperties_GetHashCode">GetHashCode()</a></td>
<td><br />(Overrides <a href="https://learn.microsoft.com/dotnet/api/system.object.gethashcode" target="_blank" rel="noopener noreferrer">Object.GetHashCode()</a>)</td>
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

## Operators
<table>
<tr>
<td><a href="M_Avalonia_Media_TextFormatting_TextRunProperties_op_Equality">Equality(TextRunProperties, TextRunProperties)</a></td>
<td> </td>
</tr>
<tr>
<td><a href="M_Avalonia_Media_TextFormatting_TextRunProperties_op_Inequality">Inequality(TextRunProperties, TextRunProperties)</a></td>
<td> </td>
</tr>
</table>

## See Also


#### Reference
<a href="N_Avalonia_Media_TextFormatting">Avalonia.Media.TextFormatting Namespace</a>  
