import Tabs from '@theme/Tabs'; 
import TabItem from '@theme/TabItem'; 
import Tag from '@site/src/components/Tag'; 

# Window Methods




## Methods
<table>
<tr>
<td><a href="M_Avalonia_Controls_WindowBase_Activate">Activate()</a></td>
<td>Activates the window.<br />(Inherited from <a href="T_Avalonia_Controls_WindowBase">WindowBase</a>)</td>
</tr>
<tr>
<td>AddHandler(RoutedEvent, Delegate, RoutingStrategies, Boolean)</td>
<td><br />(Inherited from Interactive)</td>
</tr>
<tr>
<td>AddHandler``1(RoutedEvent(UMP), EventHandler(UMP), RoutingStrategies, Boolean)</td>
<td><br />(Inherited from Interactive)</td>
</tr>
<tr>
<td>ApplyStyling()</td>
<td><br />(Inherited from StyledElement)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_Primitives_TemplatedControl_ApplyTemplate">ApplyTemplate()</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Controls_Primitives_TemplatedControl">TemplatedControl</a>)</td>
</tr>
<tr>
<td>Arrange(Rect)</td>
<td><br />(Inherited from Layoutable)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_WindowBase_ArrangeCore">ArrangeCore(Rect)</a></td>
<td>Overrides the core arrange logic for windows.<br />(Inherited from <a href="T_Avalonia_Controls_WindowBase">WindowBase</a>)</td>
</tr>
<tr>
<td>ArrangeOverride(Size)</td>
<td><br />(Inherited from Layoutable)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_Window_ArrangeSetBounds">ArrangeSetBounds(Size)</a></td>
<td><br />(Overrides <a href="M_Avalonia_Controls_WindowBase_ArrangeSetBounds">WindowBase.ArrangeSetBounds(Size)</a>)</td>
</tr>
<tr>
<td>BeginInit()</td>
<td><br />(Inherited from StyledElement)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_Window_BeginMoveDrag">BeginMoveDrag(PointerPressedEventArgs)</a></td>
<td>Starts moving a window with left button being held. Should be called from left mouse button press event handler</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_Window_BeginResizeDrag">BeginResizeDrag(WindowEdge, PointerPressedEventArgs)</a></td>
<td>Starts resizing a window. This function is used if an application has window resizing controls. Should be called from left mouse button press event handler</td>
</tr>
<tr>
<td>Bind(AvaloniaProperty, IBinding)</td>
<td><br />(Inherited from AvaloniaObject)</td>
</tr>
<tr>
<td>Bind(AvaloniaProperty, IObservable(Object), BindingPriority)</td>
<td><br />(Inherited from AvaloniaObject)</td>
</tr>
<tr>
<td>Bind``1(DirectPropertyBase(UMP), IObservable(UMP))</td>
<td><br />(Inherited from AvaloniaObject)</td>
</tr>
<tr>
<td>Bind``1(DirectPropertyBase(UMP), IObservable(BindingValue(UMP)))</td>
<td><br />(Inherited from AvaloniaObject)</td>
</tr>
<tr>
<td>Bind``1(DirectPropertyBase(UMP), IObservable(Object))</td>
<td><br />(Inherited from AvaloniaObject)</td>
</tr>
<tr>
<td>Bind``1(StyledProperty(UMP), IObservable(UMP), BindingPriority)</td>
<td><br />(Inherited from AvaloniaObject)</td>
</tr>
<tr>
<td>Bind``1(StyledProperty(UMP), IObservable(BindingValue(UMP)), BindingPriority)</td>
<td><br />(Inherited from AvaloniaObject)</td>
</tr>
<tr>
<td>Bind``1(StyledProperty(UMP), IObservable(Object), BindingPriority)</td>
<td><br />(Inherited from AvaloniaObject)</td>
</tr>
<tr>
<td>BuildEventRoute(RoutedEvent)</td>
<td><br />(Inherited from Interactive)</td>
</tr>
<tr>
<td>CheckAccess()</td>
<td><br />(Inherited from AvaloniaObject)</td>
</tr>
<tr>
<td>ClearValue(AvaloniaProperty)</td>
<td><br />(Inherited from AvaloniaObject)</td>
</tr>
<tr>
<td>ClearValue``1(AvaloniaProperty(UMP))</td>
<td><br />(Inherited from AvaloniaObject)</td>
</tr>
<tr>
<td>ClearValue``1(DirectPropertyBase(UMP))</td>
<td><br />(Inherited from AvaloniaObject)</td>
</tr>
<tr>
<td>ClearValue``1(StyledProperty(UMP))</td>
<td><br />(Inherited from AvaloniaObject)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_Window_Close">Close()</a></td>
<td>Closes the window.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_Window_Close_1">Close(Object)</a></td>
<td>Closes a dialog window with the specified result.</td>
</tr>
<tr>
<td>CoerceValue(AvaloniaProperty)</td>
<td><br />(Inherited from AvaloniaObject)</td>
</tr>
<tr>
<td>EndInit()</td>
<td><br />(Inherited from StyledElement)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_WindowBase_EnsureInitialized">EnsureInitialized()</a></td>
<td>Ensures that the window is initialized.<br />(Inherited from <a href="T_Avalonia_Controls_WindowBase">WindowBase</a>)</td>
</tr>
<tr>
<td>Equals(Object)</td>
<td><br />(Inherited from AvaloniaObject)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_Window_ExtendClientAreaToDecorationsChanged">ExtendClientAreaToDecorationsChanged(Boolean)</a></td>
<td> </td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.finalize" target="_blank" rel="noopener noreferrer">Finalize()</a></td>
<td>Allows an object to try to free resources and perform other cleanup operations before it is reclaimed by garbage collection.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
<tr>
<td>Focus(NavigationMethod, KeyModifiers)</td>
<td><br />(Inherited from InputElement)</td>
</tr>
<tr>
<td>GetBaseValue``1(StyledProperty(UMP))</td>
<td><br />(Inherited from AvaloniaObject)</td>
</tr>
<tr>
<td>GetHashCode()</td>
<td><br />(Inherited from AvaloniaObject)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_Primitives_TemplatedControl_GetTemplateFocusTarget">GetTemplateFocusTarget()</a></td>
<td>Gets the element that receives the focus adorner.<br />(Inherited from <a href="T_Avalonia_Controls_Primitives_TemplatedControl">TemplatedControl</a>)</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.gettype" target="_blank" rel="noopener noreferrer">GetType()</a></td>
<td>Gets the <a href="https://learn.microsoft.com/dotnet/api/system.type" target="_blank" rel="noopener noreferrer">Type</a> of the current instance.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
<tr>
<td>GetValue(AvaloniaProperty)</td>
<td><br />(Inherited from AvaloniaObject)</td>
</tr>
<tr>
<td>GetValue``1(DirectPropertyBase(UMP))</td>
<td><br />(Inherited from AvaloniaObject)</td>
</tr>
<tr>
<td>GetValue``1(StyledProperty(UMP))</td>
<td><br />(Inherited from AvaloniaObject)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_Window_Hide">Hide()</a></td>
<td>Hides the window but does not close it.<br />(Overrides <a href="M_Avalonia_Controls_WindowBase_Hide">WindowBase.Hide()</a>)</td>
</tr>
<tr>
<td>InitializeIfNeeded()</td>
<td><br />(Inherited from StyledElement)</td>
</tr>
<tr>
<td>InvalidateArrange()</td>
<td><br />(Inherited from Layoutable)</td>
</tr>
<tr>
<td>InvalidateMeasure()</td>
<td><br />(Inherited from Layoutable)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_TopLevel_InvalidateMirrorTransform">InvalidateMirrorTransform()</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Controls_TopLevel">TopLevel</a>)</td>
</tr>
<tr>
<td>InvalidateVisual()</td>
<td><br />(Inherited from Visual)</td>
</tr>
<tr>
<td>IsAnimating(AvaloniaProperty)</td>
<td><br />(Inherited from AvaloniaObject)</td>
</tr>
<tr>
<td>IsSet(AvaloniaProperty)</td>
<td><br />(Inherited from AvaloniaObject)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_Window_IsVisibleChanged">IsVisibleChanged(AvaloniaPropertyChangedEventArgs)</a></td>
<td><br />(Overrides <a href="M_Avalonia_Controls_WindowBase_IsVisibleChanged">WindowBase.IsVisibleChanged(AvaloniaPropertyChangedEventArgs)</a>)</td>
</tr>
<tr>
<td>LogicalChildrenCollectionChanged(Object, NotifyCollectionChangedEventArgs)</td>
<td><br />(Inherited from Visual)</td>
</tr>
<tr>
<td>Measure(Size)</td>
<td><br />(Inherited from Layoutable)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_WindowBase_MeasureCore">MeasureCore(Size)</a></td>
<td>Overrides the core measure logic for windows.<br />(Inherited from <a href="T_Avalonia_Controls_WindowBase">WindowBase</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_Window_MeasureOverride">MeasureOverride(Size)</a></td>
<td><br />(Overrides Layoutable.MeasureOverride(Size))</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone" target="_blank" rel="noopener noreferrer">MemberwiseClone()</a></td>
<td>Creates a shallow copy of the current <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_TopLevel_OnApplyTemplate">OnApplyTemplate(TemplateAppliedEventArgs)</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Controls_TopLevel">TopLevel</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_Primitives_TemplatedControl_OnAttachedToLogicalTree">OnAttachedToLogicalTree(LogicalTreeAttachmentEventArgs)</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Controls_Primitives_TemplatedControl">TemplatedControl</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_TopLevel_OnAttachedToVisualTree">OnAttachedToVisualTree(VisualTreeAttachmentEventArgs)</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Controls_TopLevel">TopLevel</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_Control_OnAttachedToVisualTreeCore">OnAttachedToVisualTreeCore(VisualTreeAttachmentEventArgs)</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Controls_Control">Control</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_WindowBase_OnClosed">OnClosed(EventArgs)</a></td>
<td>Raises the <a href="E_Avalonia_Controls_TopLevel_Closed">Closed</a> event.<br />(Inherited from <a href="T_Avalonia_Controls_WindowBase">WindowBase</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_Window_OnClosing">OnClosing(WindowClosingEventArgs)</a></td>
<td>Raises the <a href="E_Avalonia_Controls_Window_Closing">Closing</a> event.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_Window_OnCreateAutomationPeer">OnCreateAutomationPeer()</a></td>
<td><br />(Overrides <a href="M_Avalonia_Controls_Control_OnCreateAutomationPeer">Control.OnCreateAutomationPeer()</a>)</td>
</tr>
<tr>
<td>OnDataContextBeginUpdate()</td>
<td><br />(Inherited from StyledElement)</td>
</tr>
<tr>
<td>OnDataContextChanged(EventArgs)</td>
<td><br />(Inherited from StyledElement)</td>
</tr>
<tr>
<td>OnDataContextEndUpdate()</td>
<td><br />(Inherited from StyledElement)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_Primitives_TemplatedControl_OnDetachedFromLogicalTree">OnDetachedFromLogicalTree(LogicalTreeAttachmentEventArgs)</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Controls_Primitives_TemplatedControl">TemplatedControl</a>)</td>
</tr>
<tr>
<td>OnDetachedFromVisualTree(VisualTreeAttachmentEventArgs)</td>
<td><br />(Inherited from Visual)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_Control_OnDetachedFromVisualTreeCore">OnDetachedFromVisualTreeCore(VisualTreeAttachmentEventArgs)</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Controls_Control">Control</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_Control_OnGotFocus">OnGotFocus(GotFocusEventArgs)</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Controls_Control">Control</a>)</td>
</tr>
<tr>
<td>OnInitialized()</td>
<td><br />(Inherited from StyledElement)</td>
</tr>
<tr>
<td>OnKeyDown(KeyEventArgs)</td>
<td><br />(Inherited from InputElement)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_Control_OnKeyUp">OnKeyUp(KeyEventArgs)</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Controls_Control">Control</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_Control_OnLoaded">OnLoaded(RoutedEventArgs)</a></td>
<td>Invoked just before the <a href="E_Avalonia_Controls_Control_Loaded">Loaded</a> event.<br />(Inherited from <a href="T_Avalonia_Controls_Control">Control</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_Control_OnLostFocus">OnLostFocus(RoutedEventArgs)</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Controls_Control">Control</a>)</td>
</tr>
<tr>
<td>OnMeasureInvalidated()</td>
<td><br />(Inherited from Layoutable)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_WindowBase_OnOpened">OnOpened(EventArgs)</a></td>
<td>Raises the <a href="E_Avalonia_Controls_TopLevel_Opened">Opened</a> event.<br />(Inherited from <a href="T_Avalonia_Controls_WindowBase">WindowBase</a>)</td>
</tr>
<tr>
<td>OnPointerCaptureLost(PointerCaptureLostEventArgs)</td>
<td><br />(Inherited from InputElement)</td>
</tr>
<tr>
<td>OnPointerEntered(PointerEventArgs)</td>
<td><br />(Inherited from InputElement)</td>
</tr>
<tr>
<td>OnPointerExited(PointerEventArgs)</td>
<td><br />(Inherited from InputElement)</td>
</tr>
<tr>
<td>OnPointerMoved(PointerEventArgs)</td>
<td><br />(Inherited from InputElement)</td>
</tr>
<tr>
<td>OnPointerPressed(PointerPressedEventArgs)</td>
<td><br />(Inherited from InputElement)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_Control_OnPointerReleased">OnPointerReleased(PointerReleasedEventArgs)</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Controls_Control">Control</a>)</td>
</tr>
<tr>
<td>OnPointerWheelChanged(PointerWheelEventArgs)</td>
<td><br />(Inherited from InputElement)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_Window_OnPropertyChanged">OnPropertyChanged(AvaloniaPropertyChangedEventArgs)</a></td>
<td><br />(Overrides <a href="M_Avalonia_Controls_WindowBase_OnPropertyChanged">WindowBase.OnPropertyChanged(AvaloniaPropertyChangedEventArgs)</a>)</td>
</tr>
<tr>
<td>OnPropertyChangedCore(AvaloniaPropertyChangedEventArgs)</td>
<td><br />(Inherited from Animatable)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_WindowBase_OnResized">OnResized(WindowResizedEventArgs)</a></td>
<td>Raises the <a href="E_Avalonia_Controls_WindowBase_Resized">Resized</a> event.<br />(Inherited from <a href="T_Avalonia_Controls_WindowBase">WindowBase</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_Control_OnSizeChanged">OnSizeChanged(SizeChangedEventArgs)</a></td>
<td>Invoked just before the <a href="E_Avalonia_Controls_Control_SizeChanged">SizeChanged</a> event.<br />(Inherited from <a href="T_Avalonia_Controls_Control">Control</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_Primitives_TemplatedControl_OnTemplateChanged">OnTemplateChanged(AvaloniaPropertyChangedEventArgs)</a></td>
<td>Called when the <a href="P_Avalonia_Controls_Primitives_TemplatedControl_Template">Template</a> property changes.<br />(Inherited from <a href="T_Avalonia_Controls_Primitives_TemplatedControl">TemplatedControl</a>)</td>
</tr>
<tr>
<td>OnTextInput(TextInputEventArgs)</td>
<td><br />(Inherited from InputElement)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_Control_OnUnloaded">OnUnloaded(RoutedEventArgs)</a></td>
<td>Invoked just before the <a href="E_Avalonia_Controls_Control_Unloaded">Unloaded</a> event.<br />(Inherited from <a href="T_Avalonia_Controls_Control">Control</a>)</td>
</tr>
<tr>
<td>OnVisualParentChanged(Visual, Visual)</td>
<td><br />(Inherited from Layoutable)</td>
</tr>
<tr>
<td>RaiseEvent(RoutedEventArgs)</td>
<td><br />(Inherited from Interactive)</td>
</tr>
<tr>
<td>RaisePropertyChanged``1(DirectPropertyBase(UMP), UMP, UMP)</td>
<td><br />(Inherited from AvaloniaObject)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_ContentControl_RegisterContentPresenter">RegisterContentPresenter(ContentPresenter)</a></td>
<td>Called when an <a href="T_Avalonia_Controls_Presenters_ContentPresenter">ContentPresenter</a> is registered with the control.<br />(Inherited from <a href="T_Avalonia_Controls_ContentControl">ContentControl</a>)</td>
</tr>
<tr>
<td>RemoveHandler(RoutedEvent, Delegate)</td>
<td><br />(Inherited from Interactive)</td>
</tr>
<tr>
<td>RemoveHandler``1(RoutedEvent(UMP), EventHandler(UMP))</td>
<td><br />(Inherited from Interactive)</td>
</tr>
<tr>
<td>Render(DrawingContext)</td>
<td><br />(Inherited from Visual)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_TopLevel_RequestAnimationFrame">RequestAnimationFrame(Action(TimeSpan))</a></td>
<td>Enqueues a callback to be called on the next animation tick<br />(Inherited from <a href="T_Avalonia_Controls_TopLevel">TopLevel</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_TopLevel_RequestPlatformInhibition">RequestPlatformInhibition(PlatformInhibitionType, String)</a></td>
<td>Requests a <a href="T_Avalonia_Controls_PlatformInhibitionType">PlatformInhibitionType</a> to be inhibited. The behavior remains inhibited until the return value is disposed. The available set of <a href="T_Avalonia_Controls_PlatformInhibitionType">PlatformInhibitionType</a>s depends on the platform. If a behavior is inhibited on a platform where this type is not supported the request will have no effect.<br />(Inherited from <a href="T_Avalonia_Controls_TopLevel">TopLevel</a>)</td>
</tr>
<tr>
<td>SetAndRaise``1(DirectPropertyBase(UMP), UMP, UMP)</td>
<td><br />(Inherited from AvaloniaObject)</td>
</tr>
<tr>
<td>SetCurrentValue(AvaloniaProperty, Object)</td>
<td><br />(Inherited from AvaloniaObject)</td>
</tr>
<tr>
<td>SetCurrentValue``1(StyledProperty(UMP), UMP)</td>
<td><br />(Inherited from AvaloniaObject)</td>
</tr>
<tr>
<td>SetValue(AvaloniaProperty, Object, BindingPriority)</td>
<td><br />(Inherited from AvaloniaObject)</td>
</tr>
<tr>
<td>SetValue``1(DirectPropertyBase(UMP), UMP)</td>
<td><br />(Inherited from AvaloniaObject)</td>
</tr>
<tr>
<td>SetValue``1(StyledProperty(UMP), UMP, BindingPriority)</td>
<td><br />(Inherited from AvaloniaObject)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_Window_Show">Show()</a></td>
<td>Shows the window.<br />(Overrides <a href="M_Avalonia_Controls_WindowBase_Show">WindowBase.Show()</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_Window_Show_1">Show(Window)</a></td>
<td>Shows the window as a child of <em>owner</em>.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_Window_ShowDialog">ShowDialog(Window)</a></td>
<td>Shows the window as a dialog.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_Window_ShowDialog__1">ShowDialog(TResult)(Window)</a></td>
<td>Shows the window as a dialog.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_Window_SortWindowsByZOrder">SortWindowsByZOrder(Window[])</a></td>
<td>Sorts the windows ascending by their Z order - the topmost window will be the last in the list.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_TopLevel_StartRendering">StartRendering()</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Controls_TopLevel">TopLevel</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_TopLevel_StopRendering">StopRendering()</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Controls_TopLevel">TopLevel</a>)</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.tostring" target="_blank" rel="noopener noreferrer">ToString()</a></td>
<td>Returns a string that represents the current object.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_TopLevel_TryGetPlatformHandle">TryGetPlatformHandle()</a></td>
<td>Trys to get the platform handle for the TopLevel-derived control.<br />(Inherited from <a href="T_Avalonia_Controls_TopLevel">TopLevel</a>)</td>
</tr>
<tr>
<td>TryGetResource(Object, ThemeVariant, Object)</td>
<td><br />(Inherited from StyledElement)</td>
</tr>
<tr>
<td>UpdateDataValidation(AvaloniaProperty, BindingValueType, Exception)</td>
<td><br />(Inherited from AvaloniaObject)</td>
</tr>
<tr>
<td>UpdateIsEffectivelyEnabled()</td>
<td><br />(Inherited from InputElement)</td>
</tr>
<tr>
<td>UpdateLayout()</td>
<td><br />(Inherited from Layoutable)</td>
</tr>
<tr>
<td>VerifyAccess()</td>
<td><br />(Inherited from AvaloniaObject)</td>
</tr>
</table>

## Extension Methods
<table>
<tr>
<td><a href="M_Avalonia_Controls_ControlExtensions_BringIntoView_1">BringIntoView()</a></td>
<td>Tries to bring the control into view.<br />(Defined by <a href="T_Avalonia_Controls_ControlExtensions">ControlExtensions</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_ControlExtensions_BringIntoView">BringIntoView(Rect)</a></td>
<td>Tries to bring the control into view.<br />(Defined by <a href="T_Avalonia_Controls_ControlExtensions">ControlExtensions</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_ControlExtensions_FindControl__1">FindControl(T)(String)</a></td>
<td>Finds the named control in the scope of the specified control.<br />(Defined by <a href="T_Avalonia_Controls_ControlExtensions">ControlExtensions</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_Templates_DataTemplateExtensions_FindDataTemplate">FindDataTemplate(Object, IDataTemplate)</a></td>
<td>Find a data template that matches a piece of data.<br />(Defined by <a href="T_Avalonia_Controls_Templates_DataTemplateExtensions">DataTemplateExtensions</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_ControlExtensions_GetControl__1">GetControl(T)(String)</a></td>
<td>Finds the named control in the scope of the specified control and throws if not found.<br />(Defined by <a href="T_Avalonia_Controls_ControlExtensions">ControlExtensions</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_Templates_TemplateExtensions_GetTemplateChildren">GetTemplateChildren()</a></td>
<td><br />(Defined by <a href="T_Avalonia_Controls_Templates_TemplateExtensions">TemplateExtensions</a>)</td>
</tr>
</table>

## See Also


#### Reference
<a href="T_Avalonia_Controls_Window">Window Class</a>  
<a href="N_Avalonia_Controls">Avalonia.Controls Namespace</a>  
