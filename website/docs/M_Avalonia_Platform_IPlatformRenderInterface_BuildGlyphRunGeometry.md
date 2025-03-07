# BuildGlyphRunGeometry Method


Created a geometry implementation for the glyph run.



## Definition
**Namespace:** <a href="N_Avalonia_Platform">Avalonia.Platform</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
IGeometryImpl BuildGlyphRunGeometry(
	GlyphRun glyphRun
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Function BuildGlyphRunGeometry ( 
	glyphRun As GlyphRun
) As IGeometryImpl
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
abstract BuildGlyphRunGeometry : 
        glyphRun : GlyphRun -> IGeometryImpl 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Platform/IPlatformRenderInterface.cs" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="T_Avalonia_Media_GlyphRun">GlyphRun</a></dt><dd>The glyph run to build a geometry from.</dd></dl>

#### Return Value
<a href="T_Avalonia_Platform_IGeometryImpl">IGeometryImpl</a>  
The geometry returned contains the combined geometry of all glyphs in the glyph run.

## See Also


#### Reference
<a href="T_Avalonia_Platform_IPlatformRenderInterface">IPlatformRenderInterface Interface</a>  
<a href="N_Avalonia_Platform">Avalonia.Platform Namespace</a>  
