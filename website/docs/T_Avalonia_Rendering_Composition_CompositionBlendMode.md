# CompositionBlendMode Enumeration




## Definition
**Namespace:** <a href="N_Avalonia_Rendering_Composition">Avalonia.Rendering.Composition</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public enum CompositionBlendMode
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Enumeration CompositionBlendMode
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
type CompositionBlendMode
```
</TabItem>
</Tabs>



## Members
<table>
<tr>
<td>Clear</td>
<td>0</td>
<td>No regions are enabled. [Porter Duff Compositing Operators] (https://drafts.fxtf.org/compositing-1/examples/PD_clr.svg)</td>
</tr>
<tr>
<td>Src</td>
<td>1</td>
<td>Only the source will be present. [Porter Duff Compositing Operators] (https://drafts.fxtf.org/compositing-1/examples/PD_src.svg)</td>
</tr>
<tr>
<td>Dst</td>
<td>2</td>
<td>Only the destination will be present. [Porter Duff Compositing Operators] (https://drafts.fxtf.org/compositing-1/examples/PD_dst.svg)</td>
</tr>
<tr>
<td>SrcOver</td>
<td>3</td>
<td>Source is placed over the destination. [Porter Duff Compositing Operators] (https://drafts.fxtf.org/compositing-1/examples/PD_src-over.svg)</td>
</tr>
<tr>
<td>DstOver</td>
<td>4</td>
<td>Destination is placed over the source. [Porter Duff Compositing Operators] (https://drafts.fxtf.org/compositing-1/examples/PD_dst-over.svg)</td>
</tr>
<tr>
<td>SrcIn</td>
<td>5</td>
<td>The source that overlaps the destination, replaces the destination. [Porter Duff Compositing Operators] (https://drafts.fxtf.org/compositing-1/examples/PD_src-in.svg)</td>
</tr>
<tr>
<td>DstIn</td>
<td>6</td>
<td>Destination which overlaps the source, replaces the source. [Porter Duff Compositing Operators] (https://drafts.fxtf.org/compositing-1/examples/PD_dst-in.svg)</td>
</tr>
<tr>
<td>SrcOut</td>
<td>7</td>
<td>Source is placed, where it falls outside of the destination. [Porter Duff Compositing Operators] (https://drafts.fxtf.org/compositing-1/examples/PD_src-out.svg)</td>
</tr>
<tr>
<td>DstOut</td>
<td>8</td>
<td>Destination is placed, where it falls outside of the source. [Porter Duff Compositing Operators] (https://drafts.fxtf.org/compositing-1/examples/PD_dst-out.svg)</td>
</tr>
<tr>
<td>SrcATop</td>
<td>9</td>
<td>Source which overlaps the destination, replaces the destination. [Porter Duff Compositing Operators] (https://drafts.fxtf.org/compositing-1/examples/PD_src-atop.svg)</td>
</tr>
<tr>
<td>DstATop</td>
<td>10</td>
<td>Destination which overlaps the source replaces the source. [Porter Duff Compositing Operators] (https://drafts.fxtf.org/compositing-1/examples/PD_dst-atop.svg)</td>
</tr>
<tr>
<td>Xor</td>
<td>11</td>
<td>The non-overlapping regions of source and destination are combined. [Porter Duff Compositing Operators] (https://drafts.fxtf.org/compositing-1/examples/PD_xor.svg)</td>
</tr>
<tr>
<td>Plus</td>
<td>12</td>
<td>Display the sum of the source image and destination image. [Porter Duff Compositing Operators]</td>
</tr>
<tr>
<td>Modulate</td>
<td>13</td>
<td>Multiplies all components (= alpha and color). [Separable Blend Modes]</td>
</tr>
<tr>
<td>Screen</td>
<td>14</td>
<td>Multiplies the complements of the backdrop and source CompositionColorvalues, then complements the result. [Separable Blend Modes]</td>
</tr>
<tr>
<td>Overlay</td>
<td>15</td>
<td>Multiplies or screens the colors, depending on the backdrop CompositionColorvalue. [Separable Blend Modes]</td>
</tr>
<tr>
<td>Darken</td>
<td>16</td>
<td>Selects the darker of the backdrop and source colors. [Separable Blend Modes]</td>
</tr>
<tr>
<td>Lighten</td>
<td>17</td>
<td>Selects the lighter of the backdrop and source colors. [Separable Blend Modes]</td>
</tr>
<tr>
<td>ColorDodge</td>
<td>18</td>
<td>Brightens the backdrop CompositionColorto reflect the source color. [Separable Blend Modes]</td>
</tr>
<tr>
<td>ColorBurn</td>
<td>19</td>
<td>Darkens the backdrop CompositionColorto reflect the source color. [Separable Blend Modes]</td>
</tr>
<tr>
<td>HardLight</td>
<td>20</td>
<td>Multiplies or screens the colors, depending on the source CompositionColorvalue. [Separable Blend Modes]</td>
</tr>
<tr>
<td>SoftLight</td>
<td>21</td>
<td>Darkens or lightens the colors, depending on the source CompositionColorvalue. [Separable Blend Modes]</td>
</tr>
<tr>
<td>Difference</td>
<td>22</td>
<td>Subtracts the darker of the two constituent colors from the lighter color. [Separable Blend Modes]</td>
</tr>
<tr>
<td>Exclusion</td>
<td>23</td>
<td>Produces an effect similar to that of the Difference mode but lower in contrast. [Separable Blend Modes]</td>
</tr>
<tr>
<td>Multiply</td>
<td>24</td>
<td>The source CompositionColoris multiplied by the destination CompositionColorand replaces the destination [Separable Blend Modes]</td>
</tr>
<tr>
<td>Hue</td>
<td>25</td>
<td>Creates a CompositionColorwith the hue of the source CompositionColorand the saturation and luminosity of the backdrop color. [Non-Separable Blend Modes]</td>
</tr>
<tr>
<td>Saturation</td>
<td>26</td>
<td>Creates a CompositionColorwith the saturation of the source CompositionColorand the hue and luminosity of the backdrop color. [Non-Separable Blend Modes]</td>
</tr>
<tr>
<td>Color</td>
<td>27</td>
<td>Creates a CompositionColorwith the hue and saturation of the source CompositionColorand the luminosity of the backdrop color. [Non-Separable Blend Modes]</td>
</tr>
<tr>
<td>Luminosity</td>
<td>28</td>
<td>Creates a CompositionColorwith the luminosity of the source CompositionColorand the hue and saturation of the backdrop color. [Non-Separable Blend Modes]</td>
</tr>
</table>

## See Also


#### Reference
<a href="N_Avalonia_Rendering_Composition">Avalonia.Rendering.Composition Namespace</a>  

