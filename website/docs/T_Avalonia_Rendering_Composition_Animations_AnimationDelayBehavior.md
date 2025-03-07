# AnimationDelayBehavior Enumeration


Specifies the animation delay behavior.



## Definition
**Namespace:** <a href="N_Avalonia_Rendering_Composition_Animations">Avalonia.Rendering.Composition.Animations</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public enum AnimationDelayBehavior
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Enumeration AnimationDelayBehavior
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
type AnimationDelayBehavior
```
</TabItem>
</Tabs>



## Members
<table>
<tr>
<td>SetInitialValueAfterDelay</td>
<td>0</td>
<td>If a DelayTime is specified, it delays starting the animation according to delay time and after delay has expired it applies animation to the object property.</td>
</tr>
<tr>
<td>SetInitialValueBeforeDelay</td>
<td>1</td>
<td>Applies the initial value of the animation (i.e. the value at Keyframe 0) to the object before the delay time is elapsed (when there is a DelayTime specified), it then delays starting the animation according to the DelayTime.</td>
</tr>
</table>

## See Also


#### Reference
<a href="N_Avalonia_Rendering_Composition_Animations">Avalonia.Rendering.Composition.Animations Namespace</a>  
