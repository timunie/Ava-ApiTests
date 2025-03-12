# _glyphTypefaceCache Field




## Definition
**Namespace:** <a href="N_Avalonia_Media_Fonts">Avalonia.Media.Fonts</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
protected readonly ConcurrentDictionary<string, ConcurrentDictionary<FontCollectionKey, IGlyphTypeface?>> _glyphTypefaceCache
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Protected ReadOnly _glyphTypefaceCache As ConcurrentDictionary(Of String, ConcurrentDictionary(Of FontCollectionKey, IGlyphTypeface))
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
val _glyphTypefaceCache: ConcurrentDictionary<string, ConcurrentDictionary<FontCollectionKey, IGlyphTypeface>>
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Media/Fonts/FontCollectionBase.cs" title="View the source code">View Source</a>



#### Field Value
<a href="https://learn.microsoft.com/dotnet/api/system.collections.concurrent.concurrentdictionary-2" target="_blank" rel="noopener noreferrer">ConcurrentDictionary</a>(<a href="https://learn.microsoft.com/dotnet/api/system.string" target="_blank" rel="noopener noreferrer">String</a>, <a href="https://learn.microsoft.com/dotnet/api/system.collections.concurrent.concurrentdictionary-2" target="_blank" rel="noopener noreferrer">ConcurrentDictionary</a>(<a href="T_Avalonia_Media_Fonts_FontCollectionKey">FontCollectionKey</a>, <a href="T_Avalonia_Media_IGlyphTypeface">IGlyphTypeface</a>))

## See Also


#### Reference
<a href="T_Avalonia_Media_Fonts_FontCollectionBase">FontCollectionBase Class</a>  
<a href="N_Avalonia_Media_Fonts">Avalonia.Media.Fonts Namespace</a>  

