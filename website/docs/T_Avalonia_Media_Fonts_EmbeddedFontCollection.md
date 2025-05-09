# EmbeddedFontCollection Class




## Definition
**Namespace:** <a href="N_Avalonia_Media_Fonts">Avalonia.Media.Fonts</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public class EmbeddedFontCollection : FontCollectionBase
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Class EmbeddedFontCollection
	Inherits FontCollectionBase
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
type EmbeddedFontCollection = 
    class
        inherit FontCollectionBase
    end
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Media/Fonts/EmbeddedFontCollection.cs" title="View the source code">View Source</a>

<table>
<tr><td><strong>Inheritance</strong></td><td><a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>  →  <a href="T_Avalonia_Media_Fonts_FontCollectionBase">FontCollectionBase</a>  →  EmbeddedFontCollection</td></tr>
<tr><td><strong>Derived</strong></td><td><a href="T_Avalonia_Fonts_Inter_InterFontCollection">Avalonia.Fonts.Inter.InterFontCollection</a></td></tr>
</table>



## Constructors
<table>
<tr>
<td><a href="M_Avalonia_Media_Fonts_EmbeddedFontCollection__ctor">EmbeddedFontCollection(Uri, Uri)</a></td>
<td>Initializes a new instance of the EmbeddedFontCollection class</td>
</tr>
</table>

## Properties
<table>
<tr>
<td><a href="P_Avalonia_Media_Fonts_EmbeddedFontCollection_Count">Count</a></td>
<td><br />(Overrides <a href="P_Avalonia_Media_Fonts_FontCollectionBase_Count">FontCollectionBase.Count</a>)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Media_Fonts_EmbeddedFontCollection_Item">Item(Int32)</a></td>
<td><br />(Overrides <a href="P_Avalonia_Media_Fonts_FontCollectionBase_Item">FontCollectionBase.Item(Int32)</a>)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Media_Fonts_EmbeddedFontCollection_Key">Key</a></td>
<td><br />(Overrides <a href="P_Avalonia_Media_Fonts_FontCollectionBase_Key">FontCollectionBase.Key</a>)</td>
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
<td><a href="M_Avalonia_Media_Fonts_EmbeddedFontCollection_GetEnumerator">GetEnumerator()</a></td>
<td><br />(Overrides <a href="M_Avalonia_Media_Fonts_FontCollectionBase_GetEnumerator">FontCollectionBase.GetEnumerator()</a>)</td>
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
<tr>
<td><a href="M_Avalonia_Media_Fonts_EmbeddedFontCollection_TryGetGlyphTypeface">TryGetGlyphTypeface(String, FontStyle, FontWeight, FontStretch, IGlyphTypeface)</a></td>
<td><br />(Overrides <a href="M_Avalonia_Media_Fonts_FontCollectionBase_TryGetGlyphTypeface">FontCollectionBase.TryGetGlyphTypeface(String, FontStyle, FontWeight, FontStretch, IGlyphTypeface)</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Media_Fonts_FontCollectionBase_TryMatchCharacter">TryMatchCharacter(Int32, FontStyle, FontWeight, FontStretch, String, CultureInfo, Typeface)</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Media_Fonts_FontCollectionBase">FontCollectionBase</a>)</td>
</tr>
</table>

## Fields
<table>
<tr>
<td><a href="F_Avalonia_Media_Fonts_FontCollectionBase__glyphTypefaceCache">_glyphTypefaceCache</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Media_Fonts_FontCollectionBase">FontCollectionBase</a>)</td>
</tr>
</table>

## See Also


#### Reference
<a href="N_Avalonia_Media_Fonts">Avalonia.Media.Fonts Namespace</a>  

