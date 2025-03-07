# RegisterCustomAnimator&lt;T, TAnimator&gt; Method




## Definition
**Namespace:** <a href="N_Avalonia_Animation">Avalonia.Animation</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public static void RegisterCustomAnimator<T, TAnimator>()
where TAnimator : new(), InterpolatingAnimator<T>

```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Shared Sub RegisterCustomAnimator(Of T, TAnimator As \{New, InterpolatingAnimator(Of T)})
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
static member RegisterCustomAnimator : unit -> unit  when 'TAnimator : new() and InterpolatingAnimator<'T>
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Animation/Animation.AnimatorRegistry.cs#L78" title="View the source code">View Source</a>



#### Type Parameters
<dl><dt /><dd /><dt /><dd /></dl>

## See Also


#### Reference
<a href="T_Avalonia_Animation_Animation">Animation Class</a>  
<a href="N_Avalonia_Animation">Avalonia.Animation Namespace</a>  
