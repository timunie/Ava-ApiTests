# GeometryCombineMode Enumeration




## Definition
**Namespace:** <a href="N_Avalonia_Media">Avalonia.Media</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public enum GeometryCombineMode
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Enumeration GeometryCombineMode
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
type GeometryCombineMode
```
</TabItem>
</Tabs>



## Members
<table>
<tr>
<td>Union</td>
<td>0</td>
<td>The two regions are combined by taking the union of both. The resulting geometry is geometry A + geometry B.</td>
</tr>
<tr>
<td>Intersect</td>
<td>1</td>
<td>The two regions are combined by taking their intersection. The new area consists of the overlapping region between the two geometries.</td>
</tr>
<tr>
<td>Xor</td>
<td>2</td>
<td>The two regions are combined by taking the area that exists in the first region but not the second and the area that exists in the second region but not the first. The new region consists of (A-B) + (B-A), where A and B are geometries.</td>
</tr>
<tr>
<td>Exclude</td>
<td>3</td>
<td>The second region is excluded from the first. Given two geometries, A and B, the area of geometry B is removed from the area of geometry A, producing a region that is A-B.</td>
</tr>
</table>

## See Also


#### Reference
<a href="N_Avalonia_Media">Avalonia.Media Namespace</a>  

