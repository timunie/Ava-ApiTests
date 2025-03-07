# SetAnimator(IAnimationSetter, CustomAnimatorBase) Method
<span>
:::warning[Obsolete]

Note: This API is now obsolete.

:::

</span>

Sets the value of the Animator attached property for a setter.



## Definition
**Namespace:** <a href="N_Avalonia_Animation">Avalonia.Animation</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
[ObsoleteAttribute("CustomAnimatorBase will be removed before 11.0, use InterpolatingAnimator<T>", 
	true)]
public static void SetAnimator(
	IAnimationSetter setter,
	CustomAnimatorBase value
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
<ObsoleteAttribute("CustomAnimatorBase will be removed before 11.0, use InterpolatingAnimator<T>", 
	true)>
Public Shared Sub SetAnimator ( 
	setter As IAnimationSetter,
	value As CustomAnimatorBase
)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
[<ObsoleteAttribute("CustomAnimatorBase will be removed before 11.0, use InterpolatingAnimator<T>", 
	true)>]
static member SetAnimator : 
        setter : IAnimationSetter * 
        value : CustomAnimatorBase -> unit 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Animation/Animation.AnimatorRegistry.cs#L17" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="T_Avalonia_Animation_IAnimationSetter">IAnimationSetter</a></dt><dd>The animation setter.</dd><dt>  <a href="T_Avalonia_Animation_CustomAnimatorBase">CustomAnimatorBase</a></dt><dd>The property animator value.</dd></dl>

## See Also


#### Reference
<a href="T_Avalonia_Animation_Animation">Animation Class</a>  
<a href="Overload_Avalonia_Animation_Animation_SetAnimator">SetAnimator Overload</a>  
<a href="N_Avalonia_Animation">Avalonia.Animation Namespace</a>  
