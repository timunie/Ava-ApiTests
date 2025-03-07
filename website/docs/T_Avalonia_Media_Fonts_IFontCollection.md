# IFontCollection Interface




## Definition
**Namespace:** <a href="N_Avalonia_Media_Fonts">Avalonia.Media.Fonts</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public interface IFontCollection : IReadOnlyList<FontFamily>, 
	IEnumerable<FontFamily>, IEnumerable, IReadOnlyCollection<FontFamily>, 
	IDisposable
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Interface IFontCollection
	Inherits IReadOnlyList(Of FontFamily), IEnumerable(Of FontFamily), 
	IEnumerable, IReadOnlyCollection(Of FontFamily), IDisposable
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
type IFontCollection = 
    interface
        interface IReadOnlyList<FontFamily>
        interface IEnumerable<FontFamily>
        interface IEnumerable
        interface IReadOnlyCollection<FontFamily>
        interface IDisposable
    end
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Media/Fonts/IFontCollection.cs" title="View the source code">View Source</a>

<table>
<tr><td><strong>Implements</strong></td><td><a href="https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable-1" target="_blank" rel="noopener noreferrer">IEnumerable</a>(<a href="T_Avalonia_Media_FontFamily">FontFamily</a>), <a href="https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlycollection-1" target="_blank" rel="noopener noreferrer">IReadOnlyCollection</a>(<a href="T_Avalonia_Media_FontFamily">FontFamily</a>), <a href="https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist-1" target="_blank" rel="noopener noreferrer">IReadOnlyList</a>(<a href="T_Avalonia_Media_FontFamily">FontFamily</a>), <a href="https://learn.microsoft.com/dotnet/api/system.collections.ienumerable" target="_blank" rel="noopener noreferrer">IEnumerable</a>, <a href="https://learn.microsoft.com/dotnet/api/system.idisposable" target="_blank" rel="noopener noreferrer">IDisposable</a></td></tr>
</table>



## Properties
<table>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlycollection-1.count" target="_blank" rel="noopener noreferrer">Count</a></td>
<td>Gets the number of elements in the collection.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlycollection-1" target="_blank" rel="noopener noreferrer">IReadOnlyCollection</a>(<a href="T_Avalonia_Media_FontFamily">FontFamily</a>))</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist-1.item" target="_blank" rel="noopener noreferrer">Item(Int32)</a></td>
<td>Gets the element at the specified index in the read-only list.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist-1" target="_blank" rel="noopener noreferrer">IReadOnlyList</a>(<a href="T_Avalonia_Media_FontFamily">FontFamily</a>))</td>
</tr>
<tr>
<td><a href="P_Avalonia_Media_Fonts_IFontCollection_Key">Key</a></td>
<td>Get the font collection's key.</td>
</tr>
</table>

## Methods
<table>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.idisposable.dispose" target="_blank" rel="noopener noreferrer">Dispose()</a></td>
<td>Performs application-defined tasks associated with freeing, releasing, or resetting unmanaged resources.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.idisposable" target="_blank" rel="noopener noreferrer">IDisposable</a>)</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable-1.getenumerator" target="_blank" rel="noopener noreferrer">GetEnumerator()</a></td>
<td>Returns an enumerator that iterates through the collection.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable-1" target="_blank" rel="noopener noreferrer">IEnumerable</a>(<a href="T_Avalonia_Media_FontFamily">FontFamily</a>))</td>
</tr>
<tr>
<td><a href="M_Avalonia_Media_Fonts_IFontCollection_Initialize">Initialize(IFontManagerImpl)</a></td>
<td>Initializes the font collection.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Media_Fonts_IFontCollection_TryGetGlyphTypeface">TryGetGlyphTypeface(String, FontStyle, FontWeight, FontStretch, IGlyphTypeface)</a></td>
<td>Try to get a glyph typeface for given parameters.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Media_Fonts_IFontCollection_TryMatchCharacter">TryMatchCharacter(Int32, FontStyle, FontWeight, FontStretch, String, CultureInfo, Typeface)</a></td>
<td>Tries to match a specified character to a <a href="T_Avalonia_Media_Typeface">Typeface</a> that supports specified font properties.</td>
</tr>
</table>

## See Also


#### Reference
<a href="N_Avalonia_Media_Fonts">Avalonia.Media.Fonts Namespace</a>  
